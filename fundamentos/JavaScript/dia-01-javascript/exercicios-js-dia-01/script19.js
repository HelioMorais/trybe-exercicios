let descINSS
let descIR

let salariobruto = 3000

if (salariobruto <= 1556.94) {
   descINSS =salariobruto * 0.08;
}
else if (salariobruto <= 2594.92) {
    descINSS  = salariobruto * 0.09;
}
else if (salariobruto <=  5.189,82) {
    descINSS = salariobruto * 0.11;
}
else {
    descINSS = 570.88;
}

basesalario = salariobruto - descINSS;

if (basesalario <= 1903.98) {
    descIR = 0;
}
else if (basesalario <= 2826.65) {
    descIR = (basesalario * 0.075) - 142.80;
}
else if (basesalario <= 3751.05) {
    descIR = (basesalario * 0.115) - 354.80;
}
else if (basesalario <= 4664.68) {
    descIR = (basesalario * 0.225) - 636.13;
}
else {
    descIR = (basesalario * 0.275) - 869.36;
}
console.log("O salario liquido  dessa pessoa é: ",  (basesalario - descIR));