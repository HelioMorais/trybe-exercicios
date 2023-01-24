let marina = 20;
let silvia = 20;
let iza = 15;

if (marina > silvia && marina > iza) {
    console.log("Marina é a pessoa mais velha.");
} else if (silvia > marina && silvia > iza) {
    console.log("Silvia é a pessoa mais velha.");    
} else if (iza > marina && iza > silvia) {
    console.log("Iza é a pessoa mais velha.");
} else if (marina === silvia || marina === iza || iza === silvia) {
    console.log("Duas ou mais pessoas tem a mesma idade");
} else {
    console.log("Idades inseridas não válidas.");
}