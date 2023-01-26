// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” 
// se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function positivenumber (param1,) {
    if (param1 > 0) {
        return 'positive';
    }
    else if (param1 < 0 ) {
        return 'negative';
    }
    else {
        return 'zero';
    }
}
console.log(positivenumber(7));