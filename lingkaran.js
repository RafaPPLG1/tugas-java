const prompt = require('prompt-sync')({sigint: true});

let r, keliling, luas;

r = parseInt(prompt('masukan nilai r : '));

luas = Math.PI * r * r;
keliling = 2 *  Math.PI * r;

console.log(`luas   :${luas.toFixed(2)}cm²`);
console.log(`keliling   :${keliling.toFixed(2)}cm`);