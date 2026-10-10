var SPREADSHEET_ID = '1ailXICo1eJJl5xZRsvqgcIPSf0RqVZSza0ekIyhn9T8';

function doPost(e) {
  try {
    var params = e && e.parameter ? e.parameter : {};
    var requestId = /^[a-f0-9]{32}$/.test(params.requestId || '') ? params.requestId : '';
    if (params.website) {
      return resultPage(false, 'We could not process this submission. Please return to the website and try again.', requestId);
    }
    if (params.consent !== 'yes') {
      return resultPage(false, 'Please return to the website and agree before submitting your details.', requestId);
    }

    var name = String(params.name || '').trim().replace(/\s+/g, ' ');
    var phone = String(params.phone || '').trim();
    var digits = phone.replace(/\D/g, '');
    var page = String(params.page || '').trim().slice(0, 500);

    if (!name || name.length > 100 || !/^[0-9+().\s-]{7,20}$/.test(phone) ||
        digits.length < 7 || digits.length > 15) {
      return resultPage(false, 'Please return to the website and enter a valid name and phone number.', requestId);
    }

    var lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) {
      return resultPage(false, 'We could not save your details right now. Please return to the website and try again.', requestId);
    }

    var smsResult = { configured: false, queued: false };
    try {
      if (SPREADSHEET_ID === 'PASTE_GOOGLE_SHEET_ID_HERE') {
        throw new Error('Configure SPREADSHEET_ID before deploying this web app.');
      }
      var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

      var sheet = spreadsheet.getSheetByName('Visitor Leads');
      if (!sheet) {
        sheet = spreadsheet.insertSheet('Visitor Leads');
      }

      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Submitted At', 'Name', 'Mobile Number', 'Page', 'Contact Consent']);
        sheet.setFrozenRows(1);
      }

      sheet.appendRow([new Date(), safeCell(name), safeCell(phone), safeCell(page), 'Yes']);
      SpreadsheetApp.flush();

      smsResult.configured = hasSmsAlertConfiguration();
      if (smsResult.configured) {
        try {
          queueLeadAlert(spreadsheet, requestId, name, phone);
          smsResult.queued = true;
        } catch (queueError) {
          console.error('Lead was saved, but its SMS alert could not be queued:', queueError);
        }
      }
    } finally {
      lock.releaseLock();
    }

    return resultPage(
      true,
      'Your details were saved successfully. Bhati Farms may contact you about our products and delivery.',
      requestId,
      smsResult
    );
  } catch (error) {
    console.error('Visitor lead could not be saved:', error);
    var failedRequestId = e && e.parameter && /^[a-f0-9]{32}$/.test(e.parameter.requestId || '')
      ? e.parameter.requestId
      : '';
    return resultPage(false, 'We could not save your details. Please return to the website and try again.', failedRequestId);
  }
}

function hasSmsAlertConfiguration() {
  var properties = PropertiesService.getScriptProperties().getProperties();
  var alertNumber = String(properties.MSG91_ALERT_NUMBER || '').replace(/\D/g, '');
  return !!(properties.MSG91_AUTH_KEY && properties.MSG91_FLOW_ID &&
    alertNumber.length >= 10 && alertNumber.length <= 15);
}

function queueLeadAlert(spreadsheet, requestId, name, phone) {
  var sheet = spreadsheet.getSheetByName('SMS Queue');
  if (!sheet) {
    sheet = spreadsheet.insertSheet('SMS Queue');
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Request ID', 'Queued At', 'Name', 'Mobile Number', 'Status', 'Attempts', 'Updated At']);
    sheet.setFrozenRows(1);
  }
  sheet.appendRow([requestId, new Date(), safeCell(name), safeCell(phone), 'Pending', 0, new Date()]);
}

function installLeadSmsTrigger() {
  if (!hasSmsAlertConfiguration()) {
    throw new Error('Set MSG91_AUTH_KEY, MSG91_FLOW_ID, and a valid MSG91_ALERT_NUMBER in Script Properties first.');
  }

  var exists = ScriptApp.getProjectTriggers().some(function(trigger) {
    return trigger.getHandlerFunction() === 'processLeadSmsQueue';
  });
  if (!exists) {
    ScriptApp.newTrigger('processLeadSmsQueue').timeBased().everyMinutes(1).create();
  }
}

function processLeadSmsQueue() {
  if (!hasSmsAlertConfiguration()) return;

  var lock = LockService.getScriptLock();
  if (!lock.tryLock(1000)) return;

  var spreadsheet;
  var queue;
  var selectedRow = 0;
  var leadName = '';
  var leadPhone = '';
  var attempt = 0;
  try {
    spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    queue = spreadsheet.getSheetByName('SMS Queue');
    if (!queue || queue.getLastRow() < 2) return;

    var values = queue.getRange(2, 1, queue.getLastRow() - 1, 7).getValues();
    var now = new Date();
    for (var i = 0; i < values.length; i++) {
      var status = values[i][4];
      var attempts = Number(values[i][5]) || 0;
      var updatedAt = values[i][6] instanceof Date ? values[i][6] : new Date(values[i][6]);
      var pending = status === 'Pending';
      var staleSending = status === 'Sending' && now.getTime() - updatedAt.getTime() > 10 * 60 * 1000;
      if ((pending || staleSending) && attempts < 3) {
        selectedRow = i + 2;
        leadName = String(values[i][2]);
        leadPhone = String(values[i][3]);
        attempt = attempts + 1;
        queue.getRange(selectedRow, 5, 1, 3).setValues([['Sending', attempt, now]]);
        SpreadsheetApp.flush();
        break;
      }
    }
  } finally {
    lock.releaseLock();
  }

  if (!selectedRow) return;

  var sent = false;
  try {
    sent = sendLeadAlert(leadName, leadPhone).sent;
  } catch (error) {
    console.error('Queued MSG91 alert failed on attempt ' + attempt + ':', error);
  }

  if (!lock.tryLock(10000)) {
    console.error('Could not update SMS queue row ' + selectedRow + ' after sending attempt ' + attempt + '.');
    return;
  }
  try {
    var newStatus = sent ? 'Sent' : (attempt < 3 ? 'Pending' : 'Failed');
    queue.getRange(selectedRow, 5, 1, 3).setValues([[newStatus, attempt, new Date()]]);
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }
}

function sendLeadAlert(name, phone) {
  var properties = PropertiesService.getScriptProperties().getProperties();
  var authKey = properties.MSG91_AUTH_KEY;
  var flowId = properties.MSG91_FLOW_ID;
  var alertNumber = String(properties.MSG91_ALERT_NUMBER || '').replace(/\D/g, '');

  if (!authKey || !flowId || !alertNumber) {
    console.warn('Lead was saved. MSG91 SMS is not configured; set MSG91_AUTH_KEY, MSG91_FLOW_ID, and MSG91_ALERT_NUMBER in Script Properties.');
    return { configured: false, sent: false };
  }
  if (alertNumber.length < 10 || alertNumber.length > 15) {
    console.error('Lead was saved, but MSG91_ALERT_NUMBER is invalid.');
    return { configured: true, sent: false };
  }

  var response = UrlFetchApp.fetch('https://control.msg91.com/api/v5/flow/', {
    method: 'post',
    contentType: 'application/json',
    headers: { authkey: authKey },
    payload: JSON.stringify({
      template_id: flowId,
      short_url: '0',
      recipients: [{
        mobiles: alertNumber,
        var1: name.slice(0, 100),
        var2: phone.slice(0, 20)
      }]
    }),
    muteHttpExceptions: true
  });

  var statusCode = response.getResponseCode();
  if (statusCode < 200 || statusCode >= 300) {
    console.error('Lead was saved, but MSG91 rejected the SMS request with HTTP status ' + statusCode + '.');
    return { configured: true, sent: false };
  }

  var responseBody;
  try {
    responseBody = JSON.parse(response.getContentText());
  } catch (parseError) {
    console.error('Lead was saved, but MSG91 returned an unreadable SMS response.');
    return { configured: true, sent: false };
  }
  if (!responseBody || String(responseBody.type || '').toLowerCase() !== 'success') {
    console.error('Lead was saved, but MSG91 did not accept the SMS request.');
    return { configured: true, sent: false };
  }

  return { configured: true, sent: true };
}

function safeCell(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function resultPage(success, message, requestId, smsResult) {
  var heading = success ? 'Thank you!' : 'Submission not completed';
  var color = success ? '#2f6b3b' : '#9d3b2d';
  var escapedMessage = message.replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  var resultMessage = requestId
    ? '<script>window.top.postMessage({type:"bhati-farms-lead-result",success:' +
      JSON.stringify(success) + ',requestId:' + JSON.stringify(requestId) +
      ',notificationConfigured:' + JSON.stringify(!!(smsResult && smsResult.configured)) +
      ',notificationQueued:' + JSON.stringify(!!(smsResult && smsResult.queued)) + '}, "*");</script>'
    : '';

  return HtmlService.createHtmlOutput(
    '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<title>' + heading + ' | Bhati Farms</title>' +
    '<style>body{font:16px Arial,sans-serif;background:#fffcf7;color:#3d2b1f;margin:0;padding:32px}' +
    'main{max-width:520px;margin:10vh auto;background:#fff;padding:32px;border-radius:16px;box-shadow:0 12px 40px #4d3d2c18}' +
    'h1{color:' + color + '}p{line-height:1.6}a{color:#765b41}</style></head>' +
    '<body><main><h1>' + heading + '</h1><p>' + escapedMessage + '</p>' +
    '<p>You can close this tab and return to Bhati Farms.</p></main>' + resultMessage + '</body></html>'
  ).setTitle(heading + ' | Bhati Farms');
}
