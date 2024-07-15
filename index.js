import openai from "./config/open-ai.js";

import readlineSync from 'readline-sync';

import colors from 'colors';

import writeToFile from "./writingToFile.js";

import fileName from "./time.js";

import createCodeFile from "./codeSaving.js";


async function main(){

    console.log(colors.italic.blue("(type 'exit' to leave the conversation)\n"));

    const chatHistory = [];

    while(true){

        const userInput = readlineSync.question(colors.yellow("User: "));

        writeToFile(fileName+ ".txt", "User: " + userInput, 'ChatHistory');

        try{

            const messages = chatHistory.map(([role, content])=> ({role,content}));


            messages.push({role: 'user', content: userInput});

            const chatCompletion = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: messages,
                
            });

            const completionText = chatCompletion.choices[0].message.content;
        
            if(userInput.toLowerCase() === 'exit'){
                console.log(colors.green('\nBot: GoodBye!') + "\n");
                writeToFile(fileName+ ".txt", "\nBot: " + completionText + "\n", 'ChatHistory');
                return;
            }

            

            console.log(colors.green('\nBot: ') + completionText + "\n");

            writeToFile(fileName+ ".txt", "\nBot: " + completionText + "\n", 'ChatHistory');

            createCodeFile(fileName);

            chatHistory.push(['user', userInput]);
            chatHistory.push(['assistant', completionText]);


        } catch(error){
            console.error(colors.red("error"));
            writeToFile(fileName + ".txt", "error\n", 'ChatHistory');
        }
    }
    
}

main();