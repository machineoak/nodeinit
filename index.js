import fs from 'fs';
import chalk from 'chalk';

function cleaningError(error){
    console.log(error);
    throw new Error(chalk.red(error.code, 'não há arquivo no diretório..'));
}

function searchArchive(pathing){
    const encoding = 'utf-8';
    fs.readFile(pathing, encoding, (error, text) =>{
        if(error){
            cleaningError(error);
        }
        console.log(chalk.blue(text));
    })
}

searchArchive('./archive/README.md');