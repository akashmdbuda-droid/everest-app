import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const pdf = require('pdf-parse');

console.log('Starting PDF extraction...');

try {
    let dataBuffer = fs.readFileSync('menu.pdf');
    console.log('File read successfully. Size:', dataBuffer.length);

    pdf(dataBuffer).then(function (data) {
        console.log('--- START PDF TEXT ---');
        console.log(data.text);
        console.log('--- END PDF TEXT ---');
    }).catch(function (error) {
        console.error('PDF Parse Error:', error);
    });
} catch (e) {
    console.error('File Read Error:', e);
}
