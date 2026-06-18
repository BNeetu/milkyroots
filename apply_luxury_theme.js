const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// Boutique Luxury Palette
// Primary: #ffdbbb (Champagne Peach - Light/Warm)
// Secondary: #997e67 (Sandstone Brown - Mid/Dark)
// Deep Accent: #4d3d2c (Ebony Wood - For readability)
// Soft BG: #fff8f0 (Silk Cream)

const palette = {
  cream: '#ffdbbb',       // Your requested light color
  gold: '#997e67',        // Your requested mid color
  goldLight: '#ffdbbb',
  brown: '#997e67',
  brownDark: '#4d3d2c',
  warmWhite: '#fffcf7',
  text: '#3d2b1f',
  textMuted: '#7a6552',
  border: 'rgba(153, 126, 103, 0.2)',
  shadow: '0 12px 40px rgba(77, 61, 44, 0.08)'
};

// 1. UPDATE CORE CSS VARIABLES
html = html.replace(/--cream:.*?;--warm-white:.*?;--gold:.*?;--gold-light:.*?;[\s\S]*?--shadow:.*?;/,
  `--cream:${palette.cream};--warm-white:${palette.warmWhite};--gold:${palette.gold};--gold-light:${palette.goldLight};
  --brown:${palette.brown};--brown-dark:${palette.brownDark};--green:${palette.gold};--green-light:${palette.cream};
  --text:${palette.text};--text-muted:${palette.textMuted};--border:${palette.border};
  --radius:20px;--shadow:${palette.shadow};`);

// 2. TRANSFORM GRADIENTS TO ELEGANT SILK/WOOD THEME
// Hero BG
html = html.replace(/background:linear-gradient\(135deg,#CAF0F8 0%,#d4e8f6 45%,#DBF3FF 100%\);/, 
                   `background:linear-gradient(135deg, ${palette.cream} 0%, ${palette.warmWhite} 50%, #fff 100%);`);

// Subscription/Order Dark Sections
html = html.replace(/background:linear-gradient\(135deg,#03045E 0%,#0077B6 100%\)/g, 
                   `background:linear-gradient(135deg, ${palette.brownDark} 0%, ${palette.brown} 100%)`);

html = html.replace(/background:linear-gradient\(135deg,#03045E 0%,#023E8A 100%\)/g, 
                   `background:linear-gradient(135deg, ${palette.brownDark} 0%, ${palette.brown} 100%)`);

// Offer Strip (Loyalty)
html = html.replace(/background:linear-gradient\(135deg,var\(--brown\),var\(--brown-dark\)\)/g, 
                   `background:linear-gradient(135deg, ${palette.brown} 0%, ${palette.brownDark} 100%)`);

// Trial CTA Box (New)
html = html.replace(/background:linear-gradient\(135deg,#0077B6,#0096C7\)/g, 
                   `background:linear-gradient(135deg, ${palette.brown} 0%, ${palette.brownDark} 100%)`);

// Promo Banner (Top)
html = html.replace(/background: linear-gradient\(110deg, #b38728 0%, #bf953f 20%, #fcf6ba 40%, #bf953f 60%, #b38728 80%\);/, 
                   `background: linear-gradient(110deg, ${palette.gold} 0%, ${palette.cream} 50%, ${palette.gold} 100%);`);
html = html.replace(/color: #03045E;/, `color: ${palette.brownDark};`);
html = html.replace(/border-bottom: 2px solid #aa771c;/, `border-bottom: 1px solid ${palette.gold};`);

// Footer
html = html.replace(/background:#020B28/g, `background:${palette.brownDark}`);

// 3. HEALTH TABLE COLOR SYNC
html = html.replace(/background:#d4e8f6/g, `background:${palette.cream}`); // Feature header
html = html.replace(/color:#0077B6/g, `color:${palette.brown}`); // Feature text
html = html.replace(/background:#0077B6/g, `background:${palette.brown}`); // Bhati Farms header/yes cell
html = html.replace(/color:#d4e8f6/g, `color:${palette.cream}`); // checkmarks

// 4. NAV/LOGO THEME
html = html.replace(/background:rgba\(234,246,255,0\.97\)/g, `background:rgba(255,252,247,0.98)`);
html = html.replace(/color:#0096C7/g, `color:${palette.brown}`);

// 5. UPDATE BUTTONS FOR ELEGANCE
html = html.replace(/box-shadow:0 4px 18px rgba\(0,119,182,\.32\)/g, `box-shadow:0 4px 18px rgba(153, 126, 103, 0.2)`);

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Transformed entire website into Boutique Luxury theme (#ffdbbb & #997e67).");
