import fs from 'fs';
import chalk from 'chalk';

function searchArchive(pathing){
    const encoding = 'utf-8';
    fs.readFile(pathing, encoding, (_, text) =>{
        console.log(chalk.blue(text));
    })
}

searchArchive('./archive/README.md');