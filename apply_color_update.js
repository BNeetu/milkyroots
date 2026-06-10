const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf-8');

// New Palette based on #ecbf93
// Primary: #ecbf93 (Warm Peach/Sand)
// Dark: #6b4423 (Deep Coffee/Wood)
// Mid: #b07d4c (Terracotta)
// Light: #fcf6ef (Warm Ivory)

const palette = {
  cream: '#fcf6ef',
  warmWhite: '#FFFFFF',
  gold: '#b07d4c',
  goldLight: '#ecbf93',
  brown: '#6b4423',
  brownDark: '#3d2b19',
  accent: '#ecbf93',
  accentLight: '#f7e4d4',
  text: '#2d1e0f',
  textMuted: '#7a6552',
  border: 'rgba(107, 68, 35, 0.12)',
  shadow: '0 8px 32px rgba(61, 43, 25, 0.08)'
};

// Update root variables
html = html.replace(/--cream:.*?;--warm-white:.*?;--gold:.*?;--gold-light:.*?;[\s\S]*?--shadow:.*?;/,
  `--cream:${palette.cream};--warm-white:${palette.warmWhite};--gold:${palette.gold};--gold-light:${palette.goldLight};
  --brown:${palette.brown};--brown-dark:${palette.brownDark};--green:${palette.mid || palette.gold};--green-light:${palette.accentLight};
  --text:${palette.text};--text-muted:${palette.textMuted};--border:${palette.border};
  --radius:16px;--shadow:${palette.shadow};`);

// Update gradients to match the warm sun-kissed theme
html = html.replace(/background:linear-gradient\(135deg,#F3ECE1 0%,#FDFBF7 45%,#F0EDE5 100%\);/, 
                   `background:linear-gradient(135deg, ${palette.accentLight} 0%, ${palette.cream} 45%, #fff 100%);`);

html = html.replace(/background:radial-gradient\(circle at 72% 28%,rgba\(194,155,56,.1\) 0%,transparent 55%\),\s*radial-gradient\(circle at 18% 78%,rgba\(44,62,45,.08\) 0%,transparent 48%\)/, 
                   `background:radial-gradient(circle at 72% 28%,rgba(236,191,147,.15) 0%,transparent 55%),\n             radial-gradient(circle at 18% 78%,rgba(107,68,35,.08) 0%,transparent 48%)`);

// Replace forest greens with rich browns/terracottas
html = html.replace(/var\(--green\)/g, `var(--gold)`);
html = html.replace(/var\(--green-light\)/g, `var(--gold-light)`);

// Update the Promo Banner (previously golden/yellow) to a more integrated warm gradient
html = html.replace(/background: linear-gradient\(110deg, #b38728 0%, #bf953f 20%, #fcf6ba 40%, #bf953f 60%, #b38728 80%\);/, 
                   `background: linear-gradient(110deg, ${palette.gold} 0%, ${palette.goldLight} 50%, ${palette.gold} 100%);`);
html = html.replace(/color: #03045E;/, `color: #fff;`); // White text on dark warm banner
html = html.replace(/border-bottom: 2px solid #aa771c;/, `border-bottom: 2px solid ${palette.brown};`);

// Update footer and dark sections
html = html.replace(/background:#151F16/g, `background:${palette.brownDark}`);

fs.writeFileSync('index.html', html, 'utf-8');
console.log("Updated color palette to Warm Sunset (#ecbf93) theme.");
