const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.md') || file.endsWith('.txt')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/\u2014/g, '-') // em dash
        .replace(/\u2013/g, '-') // en dash
        .replace(/&mdash;/g, '-')
        .replace(/&ndash;/g, '-');
        
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated:', file);
        changedFiles++;
    }
});

console.log('Total files changed:', changedFiles);
