// Calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index+=1) {
    soma += numbers[index]  / numbers.length;
    
}
console.log(soma);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, 
// imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (soma > 20) {
    console.log("Valor maior que 20");
}
else {
    console.log("Valor menor que 20");
}