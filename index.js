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

searchArchive('./archive/README.md');

// \[[^[\]]*?\]
// \(https?:\/\/[^\s?#.].[^\s]*\)
