// Faça um programa que retorne o maior de três números. 
// Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorNum(a, b, c) {
    if (a > b && a > c) {
        return a + ' É o maior numero'
    }
    else if (b > a && b > c) {
        return b + ' É o maior numero'
    }
    else if (c > a && c > b) {
        return c + ' É o maior numero'
    } 
    else {
        return 'Digite um valor valido'
    }
}
console.log(maiorNum(2,7,5));