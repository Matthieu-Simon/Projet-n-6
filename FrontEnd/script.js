const portfolio = document.querySelector('#portfolio');
const gallery = document.querySelector('.gallery');
const titlePortfolio = document.querySelector('.title-portfolio');

// Appel Api pour l'ajout des images et titres de la galerie
const dataApi = fetch('http://localhost:5678/api/works');
// le 1er then est pour vérifier que la requête est ok
dataApi.then (response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Request failed!');
    }
    })
// le 2ème then est pour récupérer les données
.then (works => {
    // On boucle sur les données pour les afficher
    for (let i = 0; i < works.length; i++) {
        let work = works[i];
        // on crée les éléments html
        let figure = document.createElement("figure");
        gallery.appendChild(figure);
        // console.log(figure);

        let img = document.createElement("img");
        // img.src = work.imageUrl;
        img.setAttribute("alt", work.title);
        figure.appendChild(img);
        // console.log(img);

        let figcaption = document.createElement("figcaption");
        figcaption.innerHTML = work.title;
        figure.appendChild(figcaption);
    }
});

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
            

            let button = document.createElement("button");
            button.innerHTML = category.name;
            button.classList.add("btn-all");
            divFilter.appendChild(button);
        }
});
// Ajout de la div contenant les boutons de filtre
const divFilter = document.createElement("div");
divFilter.innerHTML = " ";
divFilter.classList.add("div-btn");
titlePortfolio.append(divFilter);

const btnAll = document.createElement("button");
btnAll.innerHTML = "Tous";
btnAll.classList.add("btn-all");
divFilter.appendChild(btnAll);
