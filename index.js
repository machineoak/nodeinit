import fs from 'fs';
import chalk from 'chalk';

function cleaningError(error){
    console.log(error);
    throw new Error(chalk.red(error.code, 'não há arquivo no diretório..'));
}

//async/await

async function searchArchive(pathing){
    try {
        const encoding = 'utf-8';
    const text = await fs.promises.readFile(pathing,
    encoding)
    console.log(chalk.green(text))
    } catch (error){
        cleaningError(error);
    }
}

//then promises

//function searchArchive(pathing){
//    const encoding = 'utf-8';
//    fs.promises
//    .readFile(pathing, encoding)
//    .then((text) => console.log(chalk.green(text)))
//    .catch(cleaningError)
//}

//function searchArchive(pathing){
//    const encoding = 'utf-8';
//    fs.readFile(pathing, encoding, (error, text) =>{
//        if(error){
//            cleaningError(error);
//        }
//        console.log(chalk.blue(text));
//    })
//}

searchArchive('./archive/README.md');