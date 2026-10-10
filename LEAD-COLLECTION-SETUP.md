# Visitor lead collection setup

The visitor form saves each submitted lead to a Google Sheet. The visitor must enter their name and phone number and agree to the contact notice; the site does not identify visitors automatically. The prompt is shown only once per browser and remains dismissed after the visitor closes it or submits the form.

## Create and deploy the receiver

1. Create a Google Sheet for Bhati Farms. Keep it private; do not share it publicly.
2. Copy the spreadsheet ID from its URL: the text between `/d/` and `/edit`.
3. In that sheet, select **Extensions → Apps Script**.
4. Replace the contents of `Code.gs` in the Apps Script editor with the code from [`google-apps-script/Code.gs`](./google-apps-script/Code.gs). Replace `PASTE_GOOGLE_SHEET_ID_HERE` in the script with the copied ID, then save.
5. Select **Deploy → New deployment**, choose **Web app**, and set **Execute as** to your Google account and **Who has access** to **Anyone**. This lets the website submit without requiring each visitor to sign in; the script writes to the sheet as you.
6. Deploy, approve Google's authorization prompt, and copy the web app URL ending in `/exec`.
7. In [`index.html`](./index.html), replace `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` in `VISITOR_LEADS_ENDPOINT` with that URL. Publish the website update.

The first valid submission creates a `Visitor Leads` tab with submission time, name, mobile number, page, and contact consent. The website submits in a hidden frame and closes its popup only after the script confirms the row was saved. If there is no confirmation within 10 seconds, the form displays a message to check the sheet before retrying; this can happen if the latest Apps Script version has not been deployed. Test with your own details, then remove the test row from the sheet.

## SMS notification through MSG91 (optional)

After a lead has been saved to the sheet, the receiver can ask MSG91 to send an SMS alert to `8696460370`. The alert contains the lead's name and phone number. If MSG91 is not configured or rejects the request, the lead remains saved.

1. Create or verify an MSG91 account. Configure an Indian DLT entity and sender/header and get an SMS template approved for transactional use. MSG91 requires the template content and IDs to match the DLT-approved template.
2. In MSG91, create a Flow using that approved template, with two template variables in this order: visitor name (`var1`) and visitor mobile number (`var2`). Copy its Flow ID and obtain your MSG91 Auth Key.
3. In Apps Script, open **Project Settings → Script Properties** and add:
   - `MSG91_AUTH_KEY` — the private Auth Key from MSG91
   - `MSG91_FLOW_ID` — the Flow ID for the approved template
   - `MSG91_ALERT_NUMBER` — `918696460370` (India country code `91` + `8696460370`)
4. Save the properties. Copy the latest [`google-apps-script/Code.gs`](./google-apps-script/Code.gs) into Apps Script and save.
5. In the Apps Script editor, select `installLeadSmsTrigger` in the function list and click **Run** once. Approve the requested authorization. This installs a one-minute queue worker; the website can confirm the sheet save without waiting for MSG91 to send the SMS. Leads continue to save even if the SMS cannot be sent.
6. Redeploy the existing web app as a **New version** using **Deploy → Manage deployments → Edit → New version → Deploy**.

Keep the Auth Key only in Apps Script Script Properties. Never paste it into this repository, website source, GitHub, or chat. MSG91 accepts the send request before the SMS is delivered; actual delivery can take time or fail because of provider or DLT checks. MSG91 usage may incur charges. The visitor notice explains that contact details may be shared with service providers solely to contact them.

## Important

- The Apps Script and website code both need to be deployed for the in-page confirmation to work. If you update `Code.gs`, deploy a new version using **Deploy → Manage deployments → Edit → New version → Deploy**.
- The web app endpoint must be publicly reachable for the form to work. Keep the spreadsheet private and do not put spreadsheet credentials or private keys in the website.
- The endpoint is public and may receive spam; the receiver validates input and includes a basic honeypot, but it is not a full anti-abuse service.
