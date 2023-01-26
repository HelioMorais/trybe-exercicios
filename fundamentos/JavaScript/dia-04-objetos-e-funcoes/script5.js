// Faça um programa que retorne o maior de dois números. 
// Defina, no começo do programa, duas constantes com os valores que serão comparados.



function maiorNum(a, b) {
    if (a > b) {
       return a + ' é maior que ' + b;
    }
    else {
        return b + ' é maior que ' + a;
    }
        
}
console.log(maiorNum(1,7));