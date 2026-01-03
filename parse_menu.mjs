import fs from 'fs';
import pdf from 'pdf-parse';

const buffer = fs.readFileSync('menu.pdf');
try {
    const data = await pdf(buffer);
    console.log(data.text);
} catch (e) {
    console.error('Error calling pdf:', e);
    console.log('Export:', pdf);
}
