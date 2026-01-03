import fs from 'fs';

const filePath = 'src/data/menu.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace all null image_url with the samosa image URL
const samosaImageUrl = 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg';
content = content.replace(/image_url: null/g, `image_url: '${samosaImageUrl}'`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated all menu items with samosa image');
