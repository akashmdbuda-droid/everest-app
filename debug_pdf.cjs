const pdf = require('pdf-parse');
console.log('Type:', typeof pdf);
try {
    console.log('Keys:', Object.keys(pdf));
} catch (e) { }
console.log('Value:', pdf);
