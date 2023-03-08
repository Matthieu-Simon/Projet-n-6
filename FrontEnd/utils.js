// Fonction qui va permettre de récupérer le nom du fichier à partir de l'url
export const urlToPath = (url) => {
    // on utilise la méthode split pour séparer l'url en plusieurs éléments
    const splitUrl = url.split("/");
    // on récupère le dernier élément de l'url et on remplace les chiffres par des chaînes de caractères vides
    return splitUrl[splitUrl.length - 1].replace(/[0-9]/g,"");
};