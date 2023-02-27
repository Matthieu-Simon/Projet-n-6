

const gallery = document.querySelector(".gallery");
const titlePortfolio = document.querySelector(".title-portfolio");

function urlToPath(url) {
    const splitUrl = url.split("/");
    return splitUrl[splitUrl.length - 1].replace(/[0-9]/g,"");
}

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

            let btnFilter = document.createElement("button");
            btnFilter.innerHTML = category.name;
            btnFilter.setAttribute("id", category.id);
            btnFilter.classList.add("btn");
            divFilterWorks.appendChild(btnFilter);

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

const btnAllWorks = document.createElement("button");
btnAllWorks.innerHTML = "Tous";
btnAllWorks.setAttribute("id", "all");
btnAllWorks.classList.add("btn");
divFilterWorks.appendChild(btnAllWorks);

// Ajout de la fonctionnalité de filtre
function showGalleryFiltered (filteredWorks) {
    gallery.innerHTML = "";
    for (let key in filteredWorks) {
        let work = filteredWorks[key];
        let figure = document.createElement("figure");
        gallery.appendChild(figure);

        let imgWorks = document.createElement("img");
        imgWorks.src = work.imageUrl;
        imgWorks.setAttribute("alt", work.title);
        figure.appendChild(imgWorks);

        let figcaption = document.createElement("figcaption");
        figcaption.innerHTML = work.title;
        figure.appendChild(figcaption);
    }
}


btnAllWorks.addEventListener("click", function() {
    
    console.log("Tous les travaux");
    // showGalleryFiltered(filteredData);
});

