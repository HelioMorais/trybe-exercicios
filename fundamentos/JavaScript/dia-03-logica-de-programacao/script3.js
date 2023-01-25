// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no
//  console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.


let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorp = array[0];
let menorp = array[0];

for (let index = 0; index < array.length; index+= 1) {
    if (array[index].length > maiorp.length) {
        maiorp = array[index];
    }
}
for (let index = 0; index < array.length; index++) {
    if (array[index].length < menorp.length) {
        menorp = array[index];
    }    
}

console.log(maiorp);
console.log(menorp);