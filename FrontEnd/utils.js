// Fonction qui va permettre de récupérer le nom du fichier à partir de l'url
export const urlToPath = (url) => {
    const splitUrl = url.split("/");
    return splitUrl[splitUrl.length - 1].replace(/[0-9]/g,"");
}