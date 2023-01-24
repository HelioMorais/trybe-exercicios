// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
  
}