// on importe les fonctions utiles
import { urlToPath } from './utils.js';

// on fetch les données de l'API
const dataApi = await fetch('http://localhost:5678/api/works');
const data = await dataApi.json();

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

// on crée une fonction qui va vérifier si l'admin est connecté et s'il est connecté, afficher le bouton de déconnexion
const login = document.querySelector('.login');
const logout = document.createElement("li");
logout.classList.add('logout');
logout.innerHTML = '<a href="login.html">Logout</a>';
login.after(logout);

const banner = document.querySelector('.banner');
const textPhoto = document.querySelector('.text-photo');
const textIntro = document.querySelector('.text-intro');
const textPortfolio = document.querySelector('.text-portfolio');

const iconIntro = document.querySelector('.icon-intro');
const iconPhoto = document.querySelector('.icon-photo');
const iconGallery = document.querySelector('.icon-gallery');

const checkAdmin = () => {
    // on récupère le bouton de connexion
    const login = document.querySelector('.login');
    // on récupère le bouton de déconnexion
    const logout = document.querySelector('.logout');
    // on vérifie si le token est présent dans le localStorage
    if (localStorage.getItem('token') !== null) {
        // si le token est présent, on affiche le bouton de déconnexion
        logout.style.display = 'block';
        // on cache le bouton de connexion
        login.style.display = 'none';

        banner.style.display = 'block';
        textPhoto.style.display = 'block';
        textIntro.style.display = 'block';
        textPortfolio.style.display = 'block';
        iconIntro.style.display = 'block';
        iconPhoto.style.display = 'block';
        iconGallery.style.display = 'block';

    } else {
        // si le token n'est pas présent, on affiche le bouton de connexion
        login.style.display = 'block';
        // on cache le bouton de déconnexion
        logout.style.display = 'none';

        banner.style.display = 'none';
        textPhoto.style.display = 'none';
        textIntro.style.display = 'none';
        textPortfolio.style.display = 'none';
        iconIntro.style.display = 'none';
        iconPhoto.style.display = 'none';
        iconGallery.style.display = 'none';
    }
}
// on appelle la fonction pour vérifier si l'admin est connecté
checkAdmin();

// on ajoute un évènement au clic sur le bouton de déconnexion
logout.addEventListener('click', () => {
    // on supprime le token du localStorage
    localStorage.removeItem('token');
    // on redirige l'utilisateur vers la page de connexion
    document.location.href = './login.html';
});

// on crée une fonction qui va vérifier si l'admin est connecté et s'il est connecté, afficher les éléments html pour le mode admin