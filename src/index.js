import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(text) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...text.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : 'não há links no arquivo';
}

function cleaningError(error){
    console.log(error);
    throw new Error(chalk.red(error.code, 'não há arquivo no diretório..'));
}

async function searchArchive(pathing){
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(pathing, encoding)
        return extraiLinks(text);
    } catch (error){
        cleaningError(error);
    }
}

export default searchArchive;