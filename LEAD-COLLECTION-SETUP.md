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

## Important

- The Apps Script and website code both need to be deployed for the in-page confirmation to work. If you update `Code.gs`, deploy a new version using **Deploy → Manage deployments → Edit → New version → Deploy**.
- The web app endpoint must be publicly reachable for the form to work. Keep the spreadsheet private and do not put spreadsheet credentials or private keys in the website.
- The endpoint is public and may receive spam; the receiver validates input and includes a basic honeypot, but it is not a full anti-abuse service.
- Update the Apps Script deployment when you change its code: **Deploy → Manage deployments → Edit → New version → Deploy**.
