const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// 1. REVERT CSS VARIABLES TO PREMIUM BLUE
// Values from the user's provided HTML
const palette = {
  cream: '#EAF6FF',
  warmWhite: '#F4FAFF',
  gold: '#0077B6',
  goldLight: '#48CAE4',
  brown: '#023E8A',
  brownDark: '#03045E',
  green: '#0096C7',
  greenLight: '#CCEEFF',
  text: '#03045E',
  textMuted: '#4A6FA5',
  border: 'rgba(0,119,182,0.18)',
  shadow: '0 8px 32px rgba(0,60,130,0.10)'
};

html = html.replace(/--cream:.*?;--warm-white:.*?;--gold:.*?;--gold-light:.*?;[\s\S]*?--shadow:.*?;/,
  `--cream:${palette.cream};--warm-white:${palette.warmWhite};--gold:${palette.gold};--gold-light:${palette.goldLight};
  --brown:${palette.brown};--brown-dark:${palette.brownDark};--green:${palette.green};--green-light:${palette.greenLight};
  --text:${palette.text};--text-muted:${palette.textMuted};--border:${palette.border};
  --radius:16px;--shadow:${palette.shadow};`);

// 2. REVERT GRADIENTS
html = html.replace(/background:linear-gradient\(135deg, #f7e4d4 0%, #fcf6ef 45%, #fff 100%\);/, 
                   `background:linear-gradient(135deg,#CAF0F8 0%,#EAF6FF 45%,#DBF3FF 100%);`);

html = html.replace(/background:radial-gradient\(circle at 72% 28%,rgba\(236,191,147,.15\) 0%,transparent 55%\),\s*radial-gradient\(circle at 18% 78%,rgba\(107,68,35,.08\) 0%,transparent 48%\)/, 
                   `background:radial-gradient(circle at 72% 28%,rgba(72,202,228,.15) 0%,transparent 55%),\n             radial-gradient(circle at 18% 78%,rgba(0,150,199,.08) 0%,transparent 48%)`);

html = html.replace(/background:linear-gradient\(135deg,var\(--gold\),var\(--brown\)\)/g, `background:linear-gradient(135deg,#0077B6,#0096C7)`);
html = html.replace(/background:linear-gradient\(135deg,var\(--brown-dark\) 0%,var\(--gold\) 100%\)/g, `background:linear-gradient(135deg,#03045E 0%,#0077B6 100%)`);
html = html.replace(/background:linear-gradient\(135deg,var\(--brown-dark\) 0%,var\(--brown\) 100%\)/g, `background:linear-gradient(135deg,#03045E 0%,#023E8A 100%)`);
html = html.replace(/background:var\(--gold-light\) 0%,#FDFBF7 100%/g, `background:linear-gradient(135deg,#EAF6FF 0%,#CAF0F8 100%)`);
html = html.replace(/background:#3d2b19/g, `background:#020B28`);
html = html.replace(/border-left:4px solid var\(--gold\);/g, `border-left:4px solid #0096C7;`);

// Revert Promo Banner specific gold (reverting to original yellow/gold gradient)
html = html.replace(/background: linear-gradient\(110deg, #b07d4c 0%, #ecbf93 50%, #b07d4c 100%\);/, 
                   `background: linear-gradient(110deg, #b38728 0%, #bf953f 20%, #fcf6ba 40%, #bf953f 60%, #b38728 80%);`);
html = html.replace(/color: #fff;/, `color: #03045E;`); 
html = html.replace(/border-bottom: 2px solid #6b4423;/, `border-bottom: 2px solid #aa771c;`);

// 3. CLEAN UP OTHER SMALL BLUES
html = html.replace(/color:var\(--brown\)/g, `color:#0096C7`); // For health table yes

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Successfully reverted to the original Premium Blue theme while keeping professional content.");
