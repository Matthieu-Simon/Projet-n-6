const modale = document.querySelector('.modale');
const openModale = document.querySelector('.open-modale');
const closeModale = document.querySelector('.fa-xmark');

openModale.addEventListener('click', () => {
    modale.style.display = 'flex';
    document.querySelector('.modale').style.display = 'flex';
});

closeModale.addEventListener('click', () => {
    modale.style.display = 'none'
});