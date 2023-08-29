import chalk from 'chalk';
import fs from 'fs';
import searchArchive from './index.js';

const caminho = process.argv;

function imprimeLista(result){
    console.log(chalk.yellow('lista de links'), result)
}

async function processaTexto(arg){
    const caminho = arg[2]

    if(fs.lstatSync(caminho).isFile()){
        const result = await searchArchive(arg[2]);
        imprimeLista(result);
    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await searchArchive(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(lista);
        })
        console.log(arquivos);
    }
}

processaTexto(caminho)