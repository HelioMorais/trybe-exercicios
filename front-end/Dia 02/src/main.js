import Swal from 'sweetalert2';

const button = document.querySelector('#button');
const img = document.querySelector('#image');
const name = document.querySelector('#name');

const ACCESS_TOKEN = '3449868741963314';
const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;
const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
    event.preventDefault();

    const id = randomId();
    fetch(`${BASE_URL}/${id}`)
        .then(res => res.json())
        .then((data) => {
            img.src = data.image.url;
            name.innerHTML = data.name;
        })
  
        .catch((error) => Swal.fire({
            title: 'Heroi não encontrado',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'OK',
        }));

});
