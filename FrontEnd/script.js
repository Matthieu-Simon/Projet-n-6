// Import des modules
import { generateWorks } from "./utils.js";

const dataApi = await fetch('http://localhost:5678/api/works');
const data = await dataApi.json();

// Ajout de l'évènement au clic sur les boutons de filtre par catégorie 
const btnObjets = document.querySelector(".objets");
    btnObjets.addEventListener('click', () => {
    // On filtre les données pour ne garder que les objets
    const objets = data.filter(work => work.category.name === 'Objets');
    const gallery = document.querySelector(".gallery");
    // On vide la galerie avant d'afficher les projets
    gallery.innerHTML = "";
    // On appelle la fonction pour afficher les projets
    generateWorks(objets);
});
const btnAppartements = document.querySelector(".appartements");
    btnAppartements.addEventListener('click', () => {
    const appartements = data.filter(work => work.category.name === 'Appartements');
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
    generateWorks(appartements);
});            
const btnHotels = document.querySelector(".hotels");
    btnHotels.addEventListener('click', () => {
    const hotels = data.filter(work => work.category.name === 'Hotels & restaurants');
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
    generateWorks(hotels);
});
// Ajout de l'évènement au clic sur le bouton "Tous"
const btnAll = document.querySelector(".all");
    btnAll.addEventListener("click", () => {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
    generateWorks(data);
});

