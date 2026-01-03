const fs = require('fs');
let pdf = require('pdf-parse');
// Handle ESM/CommonJS interop where default export might be nested
if (typeof pdf !== 'function' && pdf.default) {
    pdf = pdf.default;
}

let dataBuffer = fs.readFileSync('menu.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
    fs.writeFileSync('menu_dump.txt', data.text);
}).catch(function (error) {
    console.error(error);
});
