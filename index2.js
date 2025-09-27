import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
let urlLink = import.meta.url;

const __filename = fileURLToPath(urlLink);
const __dirname = dirname(__filename);



// console.log('File name:', __filename);
console.log('Directory name:', __dirname);

console.log(path.join(__dirname,"index2.js"));
