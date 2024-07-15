import fs from 'fs'

import readline from 'readline'

import writeToFile from './writingToFile.js';

let stopPrintline = false;
let write = false;
let j = 0;
const codeLanguages = ['python', 'javascript','java', 'nodejs', 'ruby', 'csharp',
'php','go','r','matlab','typescript','perl','sql','kotlin','ruby','swift','rust','lua'
,'html','css','bash','c','c++'];


        
const codeExtensions = ['.py', '.js', '.java', '.js', '.rb', '.cs', '.php', '.go', '.r','.m'
, '.ts', '.pl', '.sql', '.kt', '.rb', '.swift', '.rs', '.lua', '.html', '.css', '.bash', '.c', '.c'
];


function startsWithCapital(word) {
    return /^[A-Z]$/.test(word) || /^[0-9]$/.test(word);
}

function createCodeFile(fileName){
    const fileStream = fs.createReadStream('./ChatHistory/' + fileName + '.txt');
    const rl = readline.createInterface({
        input: fileStream,
        output: process.stdout,
        terminal: false
    });
    rl.on('line', (line) => {

            if(line.substring(0,3) === '```'){
                write = true;
                for(let i=0; i < codeLanguages.length;++i){
                    if (line.toString().substring(3) === (codeLanguages[i])) {
                        j = i;
                        break;
                    }
                }
                return;
            }
            if(line.substring(0,3) === '```'){
                stopPrintline = true;
                write = false;
                return;
            }
            if(startsWithCapital(line.charAt(0)) || stopPrintline){
                return;
            }
            if(write){
                writeToFile(fileName + codeExtensions[j], line + "\n", 'CodeHistory');
            }
    });
}
export default createCodeFile;



