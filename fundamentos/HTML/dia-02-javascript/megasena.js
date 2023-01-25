let primeiraJogada = [7, 12, 25, 36, 18, 20];
let megaSena = [48, 14, 15, 28, 34, 8];

let primeiroNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let segundoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let terceiroNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let quartoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let quintoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let sextoNumeroSorteado = Math.floor(Math.random() * 60) + 1;

let megaSenaNumeros = [primeiroNumeroSorteado, segundoNumeroSorteado, terceiroNumeroSorteado, quartoNumeroSorteado, quintoNumeroSorteado, sextoNumeroSorteado];


for (let index = 0; index < primeiraJogada.length; index += 1) {
    console.log("Numero da minha jogada: " + primeiraJogada[index]);

}

//for (let indexMegaSena = 0; indexMegaSena < megaSenaNumeros.length; indexMegaSena += 1) {
   // console.log("Numero da jogada" + megaSenaNumeros[indexMegaSena]);

//}

//comparação 
let contagemNumeroSorteados = 0;
for (let indexMegaSena = 0; indexMegaSena < megaSenaNumeros.length; indexMegaSena += 1) {
    for (let index = 0; index < primeiraJogada.length; index += 1) {
       if (megaSenaNumeros[indexMegaSena] === primeiraJogada[index]) {
        console.log("deu certo");
        contagemNumeroSorteados = contagemNumeroSorteados + 1;
       }    
    }
}

console.log("Numero sorteados: " + megaSenaNumeros);
console.log("========================================");
console.log("Jogada  1");
console.log("");