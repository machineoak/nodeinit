import chalk from 'chalk';
import fs from 'fs';
import searchArchive from './index.js';
import validLista from './http-validacao.js';

const caminho = process.argv;

async function imprimeLista(valid, result, identificador = ''){

    if(valid){
        console.log(
            chalk.yellow('lista validada'),
            chalk.black.bgGreen(identificador),
            await validLista(result));
    } else {
        console.log(
            chalk.yellow('lista de links'),
            chalk.black.bgGreen(identificador),
            result);
    }
}

async function processaTexto(arg){
    const caminho = arg[2];
    const valida = arg[3] === '--valida';

    try{
        fs.lstatSync(caminho);
    } catch (error) {
        if(error.code === 'ENOENT'){
            console.log('arquivo ou diretório não existe.')
            return;
        }
    }

    if(fs.lstatSync(caminho).isFile()){
        const result = await searchArchive(arg[2]);
        imprimeLista(valida, result);
    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await searchArchive(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(valida, lista, nomeDeArquivo);
        })
        console.log(arquivos);
    }
}

processaTexto(caminho)