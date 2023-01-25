const comida = 'pão na chapa';
const bebida = 'cafézinho';
if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;
console.log(conditionOne && conditionTwo);


const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;
const listaDeCompras = cenouras && leite && arroz && feijao;

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false