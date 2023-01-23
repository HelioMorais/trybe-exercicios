const a = 65;
const b = 100;
const c = 15;

let result = a + b + c;
let angulo = a > 0 && b > 0 && c > 0;

if (angulo) {
    if (result === 180) {
        console.log(true);
    }
    else {
        console.log(false);
    }
} else {
    console.log('Error: Angulo invalido');
}