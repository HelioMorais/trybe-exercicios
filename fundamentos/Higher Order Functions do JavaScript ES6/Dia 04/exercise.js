// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Corona', 'Heineken', 'Spaten'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Whisky', 'Vodka', 'Gin'];

const fruitSalad = (fruit, additional) => {
 const newArray = [...specialFruit, ...additionalItens]
 return newArray;
};

console.log(fruitSalad(specialFruit, additionalItens));