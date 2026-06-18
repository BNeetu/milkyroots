const fs = require('fs');
const { JSDOM } = require('jsdom');

let html = fs.readFileSync('index.html', 'utf-8');

// 1. CSS REPLACEMENTS (Premium Earthy Theme)
// Update root variables to forest greens, rich golds, and soft creams
html = html.replace(/--cream:#EAF6FF;--warm-white:#F4FAFF;--gold:#0077B6;--gold-light:#48CAE4;[\s\S]*?--shadow:0 8px 32px rgba\(0,60,130,0\.10\);/,
  `--cream:#FDFBF7;--warm-white:#FFFFFF;--gold:#C29B38;--gold-light:#D4AF57;
  --brown:#2C3E2D;--brown-dark:#1A261B;--green:#3A533B;--green-light:#E8EFE9;
  --text:#222222;--text-muted:#555555;--border:rgba(44,62,45,0.12);
  --radius:16px;--shadow:0 8px 32px rgba(26,38,27,0.08);`);

// Update hardcoded gradients to match the new theme
html = html.replace(/background:linear-gradient\(135deg,#CAF0F8 0%,#EAF6FF 45%,#DBF3FF 100%\);/, `background:linear-gradient(135deg,#F3ECE1 0%,#FDFBF7 45%,#F0EDE5 100%);`);
html = html.replace(/background:radial-gradient\(circle at 72% 28%,rgba\(72,202,228,\.15\) 0%,transparent 55%\),\s*radial-gradient\(circle at 18% 78%,rgba\(0,150,199,\.08\) 0%,transparent 48%\)/, `background:radial-gradient(circle at 72% 28%,rgba(194,155,56,.1) 0%,transparent 55%),\n             radial-gradient(circle at 18% 78%,rgba(44,62,45,.08) 0%,transparent 48%)`);
html = html.replace(/background:linear-gradient\(135deg,#0077B6,#0096C7\)/g, `background:linear-gradient(135deg,var(--green),var(--brown))`);
html = html.replace(/background:linear-gradient\(135deg,#03045E 0%,#0077B6 100%\)/g, `background:linear-gradient(135deg,var(--brown-dark) 0%,var(--green) 100%)`);
html = html.replace(/background:linear-gradient\(135deg,#03045E 0%,#023E8A 100%\)/g, `background:linear-gradient(135deg,var(--brown-dark) 0%,var(--brown) 100%)`);
html = html.replace(/background:#EAF6FF/g, `background:var(--green-light)`);
html = html.replace(/background:linear-gradient\(90deg,#0077B6,#00B4D8,#48CAE4\)/g, `background:linear-gradient(90deg,var(--brown),var(--green),var(--gold-light))`);
html = html.replace(/background:linear-gradient\(135deg,#EAF6FF 0%,#CAF0F8 100%\)/g, `background:linear-gradient(135deg,var(--green-light) 0%,#FDFBF7 100%)`);
html = html.replace(/background:#020B28/g, `background:#151F16`);
html = html.replace(/border-left:4px solid #0096C7;/g, `border-left:4px solid var(--gold);`);
html = html.replace(/background:linear-gradient\(135deg,#48CAE4,#0077B6\)/g, `background:linear-gradient(135deg,var(--gold-light),var(--gold))`);
html = html.replace(/color:#0096C7/g, `color:var(--gold)`);

// 2. JSDOM TEXT REPLACEMENT (Crisp & Business Focused)
const dom = new JSDOM(html);
const doc = dom.window.document;

const updateEl = (sel, text) => {
    const el = doc.querySelector(sel);
    if(el) el.innerHTML = text;
};

// Hero
updateEl('.hero-desc', 'Farm-fresh A2 milk, probiotic curd, and authentic bilona ghee. Delivered daily across Beawar with strict quality control and zero adulteration.');

// About Us - Operational Excellence
updateEl('#about .section-title', 'Our Journey & Operational Standards');
updateEl('#about .section-sub', 'From a highly successful climate-controlled polyhouse to a premium dairy farm — built on strict quality control, hygiene, and business excellence.');

updateEl('.about-text p:nth-of-type(1)', '<strong>Rooted in Quality, Driven by Excellence.</strong><br>The Bhati family’s journey began with a successful climate-controlled polyhouse, supplying chemical-free produce to Beawar. We learned early that exceptional food requires strict operational control and zero compromises.');
updateEl('.about-text p:nth-of-type(2)', '<strong>Transition to Modern Dairy</strong><br>We applied this same operational rigor to Bhati Farms. By sourcing pure indigenous cattle and managing a stress-free, hygienic farm environment, we ensure premium milk quality day in and day out.');
updateEl('.about-text p:nth-of-type(3)', '<strong>Uncompromising Business Values</strong><br>Our promise isn\'t just about heritage; it\'s about reliable execution. From 4 AM hygienic milking to guaranteed morning delivery, we operate with full transparency and strict quality control.');

// Remove extra fluff paragraphs to keep it crisp
const p4 = doc.querySelector('.about-text p:nth-of-type(4)'); if(p4) p4.remove();
const p5 = doc.querySelector('.about-text p:nth-of-type(5)'); if(p5) p5.remove();

// Team - Professional Roles
updateEl('#team .section-title', 'Leadership & Operations');
updateEl('#team .section-sub', 'Our team is committed to seamless supply chain management, farm hygiene, and exceptional customer service.');

updateEl('.team-card:nth-child(1) .team-badge', '👑 Director');
updateEl('.team-card:nth-child(1) h3', 'Arjun Singh Bhati');
updateEl('.team-card:nth-child(1) p', 'Drives overall business strategy, farm operations, and enforces our uncompromising quality standards.');

updateEl('.team-card:nth-child(2) .team-badge', '🤝 Head of Operations');
updateEl('.team-card:nth-child(2) h3', 'Laxman Singh Bhati');
updateEl('.team-card:nth-child(2) p', 'Ensures seamless supply chain management, daily logistics, and strict morning delivery timelines.');

updateEl('.team-card:nth-child(3) .team-badge', '🎓 Strategic Advisor');
updateEl('.team-card:nth-child(3) h3', 'D S Bhati');
updateEl('.team-card:nth-child(3) p', 'Guides customer relations, scalable growth strategies, and ensures long-term business excellence.');

// Save updated HTML
fs.writeFileSync('index.html', dom.serialize(), 'utf-8');
console.log("Updated index.html with new premium theme and crisp content.");

// 3. UPDATE translations.js DICT
let tjs = fs.readFileSync('translations.js', 'utf-8');

const replaceDict = (sel, newHi) => {
    const escapedSel = sel.replace(/[.*+?^$/{}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`({\\s*sel:\\s*'${escapedSel}',\\s*hi:\\s*')[^']*(')`);
    tjs = tjs.replace(regex, `$1${newHi}$2`);
};

// Sync Hindi translations with new crisp text
replaceDict('.hero-desc', 'खेत का ताज़ा A2 दूध, प्रोबायोटिक दही और असली बिलोना घी। सख्त गुणवत्ता नियंत्रण और शून्य मिलावट के साथ ब्यावर में प्रतिदिन वितरित।');
replaceDict('#about .section-title', 'हमारी यात्रा और परिचालन मानक');
replaceDict('#about .section-sub', 'एक अत्यधिक सफल जलवायु-नियंत्रित पॉलीहाउस से लेकर एक प्रीमियम डेयरी फार्म तक — सख्त गुणवत्ता नियंत्रण, स्वच्छता और व्यावसायिक उत्कृष्टता पर निर्मित।');

replaceDict('.about-text p:nth-of-type(1)', '<strong>गुणवत्ता पर आधारित, उत्कृष्टता से प्रेरित।</strong><br>भाटी परिवार की यात्रा एक सफल जलवायु-नियंत्रित पॉलीहाउस के साथ शुरू हुई, जिसने ब्यावर को रसायन-मुक्त उपज की आपूर्ति की। हमने शुरुआत में ही सीख लिया था कि असाधारण भोजन के लिए सख्त परिचालन नियंत्रण और शून्य समझौते की आवश्यकता होती है।');
replaceDict('.about-text p:nth-of-type(2)', '<strong>आधुनिक डेयरी में संक्रमण</strong><br>हमने इसी परिचालन कठोरता को मिल्कीरूट्स पर लागू किया। शुद्ध स्वदेशी मवेशियों को प्राप्त करके और तनाव-मुक्त, स्वच्छ कृषि वातावरण का प्रबंधन करके, हम हर दिन प्रीमियम दूध की गुणवत्ता सुनिश्चित करते हैं।');
replaceDict('.about-text p:nth-of-type(3)', '<strong>असमझौतावादी व्यावसायिक मूल्य</strong><br>हमारा वादा केवल विरासत के बारे में नहीं है; यह विश्वसनीय निष्पादन के बारे में है। सुबह 4 बजे स्वच्छ दोहन से लेकर गारंटीकृत सुबह की डिलीवरी तक, हम पूर्ण पारदर्शिता और सख्त गुणवत्ता नियंत्रण के साथ काम करते हैं।');

// Remove deleted paragraph keys from dict
tjs = tjs.replace(/{\s*sel:\s*'\.about-text p:nth-child\(4\)',\s*hi:\s*'.*?'\s*},\n?/g, '');
tjs = tjs.replace(/{\s*sel:\s*'\.about-text p:nth-child\(5\)',\s*hi:\s*'.*?'\s*},\n?/g, '');

replaceDict('#team .section-title', 'नेतृत्व और संचालन');
replaceDict('#team .section-sub', 'हमारी टीम निर्बाध आपूर्ति श्रृंखला प्रबंधन, कृषि स्वच्छता और असाधारण ग्राहक सेवा के लिए प्रतिबद्ध है।');

replaceDict('.team-card:nth-child(1) .team-badge', '👑 निदेशक (Director)');
replaceDict('.team-card:nth-child(1) h3', 'अर्जुन सिंह भाटी');
replaceDict('.team-card:nth-child(1) p', 'समग्र व्यापार रणनीति, कृषि संचालन का संचालन करते हैं और हमारे असंबद्ध गुणवत्ता मानकों को लागू करते हैं।');

replaceDict('.team-card:nth-child(2) .team-badge', '🤝 संचालन प्रमुख');
replaceDict('.team-card:nth-child(2) h3', 'लक्ष्मण सिंह भाटी');
replaceDict('.team-card:nth-child(2) p', 'निर्बाध आपूर्ति श्रृंखला प्रबंधन, दैनिक रसद और सख्त सुबह की डिलीवरी समय-सीमा सुनिश्चित करते हैं।');

replaceDict('.team-card:nth-child(3) .team-badge', '🎓 रणनीतिक सलाहकार');
replaceDict('.team-card:nth-child(3) h3', 'डी एस भाटी');
replaceDict('.team-card:nth-child(3) p', 'ग्राहक संबंधों, स्केलेबल विकास रणनीतियों का मार्गदर्शन करते हैं और दीर्घकालिक व्यावसायिक उत्कृष्टता सुनिश्चित करते हैं।');

fs.writeFileSync('translations.js', tjs, 'utf-8');
console.log("Updated translations.js with crisp Hindi mappings.");
