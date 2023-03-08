// on importe les fonctions utiles
import { urlToPath } from './utils.js';

// on fetch les données de l'API
const dataApi = await fetch('http://localhost:5678/api/works');
const data = await dataApi.json();
console.log(data);
// Fonction qui va générer les éléments html pour chaque projet de la galerie
const generateWorks = (data) => {
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

const categories = document.querySelector('.categories');
const btnAll = document.createElement('button');
btnAll.classList.add('btn', "All");
btnAll.innerText = 'Tous';
categories.appendChild(btnAll);

const btnObject = document.createElement('button');
btnObject.classList.add('btn', "1");
btnObject.innerText = 'Objets';
categories.appendChild(btnObject);

const btnAppartement = document.createElement('button');
btnAppartement.classList.add('btn', "2");
btnAppartement.innerText = 'Appartements';
categories.appendChild(btnAppartement);

const btnHotels = document.createElement('button');
btnHotels.classList.add('btn', "3");
btnHotels.innerText = 'Hôtels & Restaurants';
categories.appendChild(btnHotels);

// on ajoute un évènement au clic sur chaque bouton
btnObject.addEventListener('click', () => {
    const dataObject = data.filter(work => work.category.id === 1);
    generateWorks(dataObject);
});

btnAppartement.addEventListener('click', () => {
    const dataAppartement = data.filter(work => work.category.id === 2);
    generateWorks(dataAppartement);
});

btnHotels.addEventListener('click', () => {
    const dataHotels = data.filter(work => work.category.id === 3);
    generateWorks(dataHotels);
});
// on ajoute un évènement au clic sur le bouton "Tous" pour afficher tous les projets
btnAll.addEventListener('click', () => {
    generateWorks(data);
});
