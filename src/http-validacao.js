import chalk from "chalk";

function extraiLinks(arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function statusCheck(listaURLs){
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
            try {
                const response = await fetch(url)
                return response.status;
            } catch (error) {
                return solveError(error);
            }
        })
    )
    return arrStatus;
}

function solveError(error){
    if (error.cause.code === 'ENOTFOUND'){
        return 'link not found';
    } else{
        return 'an error';
    }
}

export default async function validLista(listaDeLinks){
    const links = extraiLinks(listaDeLinks);
    const status = await statusCheck(links);

    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }))
}
