import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('menu.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
    fs.writeFileSync('menu_dump.txt', data.text);
}).catch(function (error) {
    console.error(error);
});
