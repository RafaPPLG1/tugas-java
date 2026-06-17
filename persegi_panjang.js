const prompt = require('prompt-sync')({sigint: true});

let panjang, lebar, luas, keliling;

panjang = parseInt(prompt('masukan panjang: '));
lebar = parseInt(prompt('masukan lebar: '))

luas = panjang * lebar;
keliling = 2 * (panjang+lebar);

console.log(`luas       : ${luas.toFixed(2)} cm²`);
console.log(`keliling  : ${keliling.toFixed(2)} cm`);