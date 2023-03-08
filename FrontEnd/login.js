// on récupère les éléments du DOM
const loginForm = document.querySelector('.login_form');
const loginBtn = document.querySelector('.btn');

loginBtn.addEventListener('click', (event) => {
    // on met en place un évènement pour empêcher le comportement par défaut du bouton
    event.preventDefault();
    // on récupère les valeurs des champs email et password
    const email = document.querySelector('.input_email').value;
    const password = document.querySelector('.input_password').value;

    // on crée un objet qui contient les données à envoyer à l'API
    const dataUser = {
        email: email,
        password: password,
    };
    console.log(dataUser);
    // on envoie les données à l'API
    fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // on transforme les données en JSON
        body: JSON.stringify(dataUser),
    }).then((response) => response.json())
      .then((data) => {
        // on vérifie si le token est présent dans les données reçues
        if (data.token !== undefined) {
            // on stocke le token dans le localStorage
            localStorage.setItem('token', data.token);
            // on redirige l'utilisateur vers la page d'accueil
            document.location.href = 'index.html';
        } else {
            alert('Identifiants incorrects');
        }
    }).catch(error => {
        alert('Identifiants incorrects');
        console.error(error);
    });
});