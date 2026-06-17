const prompt = require('prompt-sync')({sigint: true});

let luas, sisi, d1, d2;

sisi = parseInt(prompt('Masukkan panjang sisi belah ketupat: '));
d1 = parseInt(prompt('Masukkan panjang diagonal 1: '));
d2 = parseInt(prompt('Masukkan panjang diagonal 2: '));

luas = 1/2 * d1 * d2;
keliling = 4 * sisi;

console.log(`Luas belah ketupat: ${luas}`);
console.log(`Keliling belah ketupat: ${keliling}`);