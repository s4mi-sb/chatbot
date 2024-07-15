import fs from 'fs'
import path from 'path'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function writeToFile(txtFile, data, directory){

    const dirPath = path.join(__dirname, directory);
   
    const filePath = path.join(dirPath, txtFile);
    
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
        fs.appendFileSync(filePath, data, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file', err);
            } else {
                console.log('File has been saved');
            }
        });
    
        
}

export default writeToFile
