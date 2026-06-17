const prompt = require('prompt-sync')({sigint: true});

let luas, keliling, d1, d2, p, q;

d1 = parseInt(prompt('masukan nilai diagonal1 : '));
d2 = parseInt(prompt('masukan nilai diagonal2 : '));
p = parseInt(prompt('masukan nilai p : '));
q = parseInt(prompt('masukan nilai q : '));

luas = 1/2 * d1 * d2;
keliling = 2 * (p + q);

console.log(`luas   :${luas.toFixed(2)}cm²`);
console.log(`keliling   :${keliling.toFixed(2)}cm`);