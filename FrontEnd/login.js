const loginForm = document.querySelector('.login_form');
const loginBtn = document.querySelector('.btn');

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('.input_email').value;
    // console.log(email);
    const password = document.querySelector('.input_password').value;
    // console.log(password);
    const data = {
        email: email,
        password: password,
    };
    console.log(data);
    const responseData = fetch('http://localhost:5678/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    // console.log(responseData);
    const response = responseData.then((response) => {
        return response.json();
    });
    // console.log(response);
    response.then((data) => {
        if (data.token !== undefined) {
            localStorage.setItem('token', data.token);
            console.log(data.token);
            document.location.href = 'index.html';
            alert('Vous êtes connecté !');
        } else {
            alert('Identifiants incorrects');
        }
    });
});