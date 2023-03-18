const getDogButton = document.querySelector('#random-dog');
const getCatButton = document.querySelector("#random-cat");
const surpriseMeButton = document.querySelector("#surprise-me");
const petImage = document.querySelector("#random-pet-image");


getDogButton.addEventListener('click',(event) => {
    event.preventDefault();
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then((data) => {
            const petUrl = data.message;
            petImage.src = petUrl;
        })


})

getCatButton.addEventListener('click',(event) => {
    event.preventDefault();
    fetch('https://aws.random.cat/meow')
        .then(response => response.json())
        .then((data) => {
            const petUrl = data.file;
            petImage.src = petUrl;
        })
})

surpriseMeButton.addEventListener('click', (event) => {
    event.preventDefault();
    Promise.any([
    fetch("https://dog.ceo/api/breeds/image/random"),
    fetch("https://aws.random.cat/meow"),
    ])
    .then((response) => response.json())
    .then((data) => {
        const petUrl = data.file || data.message
        petImage.src = petUrl;
    })
})