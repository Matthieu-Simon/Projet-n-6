// Import des modules
import { urlToPath } from "./utils.js";

// On sélectionne les éléments du DOM
const gallery = document.querySelector(".gallery");
const titlePortfolio = document.querySelector(".title-portfolio");

// On récupère les données de l'API
const dataApi = fetch('http://localhost:5678/api/works');

dataApi.then (response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Request failed!');
    }
    })
    .then (data => {
        for (const work of data) {
            // on crée les éléments html
            let figure = document.createElement("figure");
            gallery.appendChild(figure);

            let imgWorks = document.createElement("img");
            imgWorks.src = "./assets/images/" + urlToPath(work.imageUrl);
            imgWorks.setAttribute("alt", work.title);
            figure.appendChild(imgWorks);

            let figcaption = document.createElement("figcaption");
            figcaption.innerHTML = work.title;
            figure.appendChild(figcaption);
        }
});

const myfunction = (id) => {
    console.log(id);
}
// Ajout des boutons de filtre
const categoriesApi = fetch('http://localhost:5678/api/categories');

categoriesApi.then (response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Request failed!');
    }
    })
    .then (categories => {
        for (let i = 0; i < categories.length; i++) {
            let category = categories[i];
            // Création des boutons de filtre par catégorie
            let btnFilter = document.createElement("button");
            btnFilter.innerHTML = category.name;
            btnFilter.setAttribute("id", category.id);
            btnFilter.classList.add("btn");
            divFilterWorks.appendChild(btnFilter);
            // Ajout de l'évènement au clic sur les boutons de filtre par catégorie 
            btnFilter.addEventListener('click', () => {
                myfunction(category.id);
            })
        }
});
// Ajout de la div contenant les boutons de filtre
const divFilterWorks = document.createElement("div");
divFilterWorks.innerHTML = "";
divFilterWorks.classList.add("div-btnFilter");
titlePortfolio.append(divFilterWorks);
// Ajout du bouton "Tous"
const btnAllWorks = document.createElement("button");
btnAllWorks.innerHTML = "Tous";
btnAllWorks.setAttribute("id", "all");
btnAllWorks.classList.add("btn");
divFilterWorks.appendChild(btnAllWorks);

// Ajout de l'évènement au clic sur le bouton "Tous"
btnAllWorks.addEventListener("click", function() {
    
    console.log("Tous les travaux");
    // showGalleryFiltered(filteredData);
});

