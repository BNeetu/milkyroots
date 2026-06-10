const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'milkyroots_manager_1.html',
    'apply_premium_update.js',
    'apply_luxury_theme.js',
    'translations.js',
    'package.json',
    'package-lock.json'
];

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`File ${filePath} not found, skipping.`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace MilkyRoots with Bhati Farm
    content = content.replace(/MilkyRoots/g, 'Bhati Farm');
    // Replace milkyRoots with bhatiFarm
    content = content.replace(/milkyRoots/g, 'bhatiFarm');
    // Replace milkyroots with bhatifarm
    content = content.replace(/milkyroots/g, 'bhatifarm');
    // Replace Milkyroots with Bhati farm (just in case, as noted for apply_luxury_theme.js L63)
    content = content.replace(/Milkyroots/g, 'Bhati Farm');

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
}

files.forEach(replaceInFile);
