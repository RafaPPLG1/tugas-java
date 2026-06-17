const prompt = require('prompt-sync')({sigint: true});

let luas, keliling, tinggi, a, b , c, d;

tinggi = parseInt(prompt('masukan tinggi : '));
a = parseInt(prompt('masukan nilai a : '));
b = parseInt(prompt('masukan nilai b : '));
c= parseInt(prompt('masukan nilai c : '));
d = parseInt(prompt('masukan nilai d : '));


luas = 1/2 * (a + b) * tinggi;
keliling = a + b + c + d;

console.log(`luas   :${luas.toFixed(2)}cm²`);
console.log(`keliling   :${keliling.toFixed(2)}cm`);