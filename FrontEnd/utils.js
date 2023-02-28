// Fonction qui va permettre de récupérer le nom du fichier à partir de l'url
export const urlToPath = (url) => {
    const splitUrl = url.split("/");
    return splitUrl[splitUrl.length - 1].replace(/[0-9]/g,"");
}
// Récupération des données de l'API
const dataApi = await fetch('http://localhost:5678/api/works');
const data = await dataApi.json();

// Fonction qui va générer les éléments html pour chaque projet de la galerie
export const generateWorks = (data) => {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    for (const work of data) {
        // on crée les éléments html
        let figure = document.createElement("figure");
        gallery.appendChild(figure);
        // on crée les images et ajoute les attributs 
        let imgWorks = document.createElement("img");
        imgWorks.src = "./assets/images/" + urlToPath(work.imageUrl);
        imgWorks.setAttribute("alt", work.title);
        figure.appendChild(imgWorks);
        // on crée les titres des images
        let figcaption = document.createElement("figcaption");
        figcaption.innerHTML = work.title;
        figure.appendChild(figcaption);
    };
};
// On appelle la fonction pour afficher tous les projets
generateWorks(data);