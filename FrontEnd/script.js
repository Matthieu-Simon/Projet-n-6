const gallery = document.querySelector(".gallery");

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
            imgWorks.src = "./assets/images/abajour-tahina.png";
            imgWorks.setAttribute("alt", work.title);
            figure.appendChild(imgWorks);

            let figcaption = document.createElement("figcaption");
            figcaption.innerHTML = work.title;
            figure.appendChild(figcaption);
        }
        
    });