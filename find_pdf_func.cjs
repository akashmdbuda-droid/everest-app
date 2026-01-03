const pdfLib = require('pdf-parse');
console.log('Export type:', typeof pdfLib);
if (typeof pdfLib === 'object') {
    const keys = Object.getOwnPropertyNames(pdfLib);
    console.log('Keys:', keys);
    keys.forEach(k => {
        try {
            console.log(`${k}: ${typeof pdfLib[k]}`);
        } catch (e) { }
    });
}
