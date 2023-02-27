const gallery = document.querySelector(".gallery");
const titlePortfolio = document.querySelector(".title-portfolio");

const dataApi = fetch('http://localhost:5678/api/works');

dataApi.then (response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Request failed!');
    }
    })
    .then (data => {
        for (i = 0; i < data.length; i++) {
            let work = data[i];

            // on crée les éléments html
            let figure = document.createElement("figure");
            gallery.appendChild(figure);

            let imgWorks = document.createElement("img");
            // imgWorks.src = "./assets/images/abajour-tahina.png";
            // imgWorks.src = work.imageUrl;
            // console.log(work.imageUrl)
            imgWorks.setAttribute("alt", work.title);
            figure.appendChild(imgWorks);

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
            button.classList.add("btn");
            divFilter.appendChild(button);
        }
});
// Ajout de la div contenant les boutons de filtre
const divFilter = document.createElement("div");
divFilter.innerHTML = "";
divFilter.classList.add("div-btn");
titlePortfolio.append(divFilter);

const btnAll = document.createElement("button");
btnAll.innerHTML = "Tous";
btnAll.classList.add("btn");
divFilter.appendChild(btnAll);
