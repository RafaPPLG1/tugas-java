const prompt = require('prompt-sync')({sigint: true});

let alas, tinggi, luas, keliling, sisi_a, sisi_b, sisi_c;

alas = parseInt(prompt('masukan alas : '));
tinggi = parseInt(prompt('masukan tinggi : '));
sisi_a = parseInt(prompt('masukan sisi a : '));
sisi_b = parseInt(prompt('masukan sisi b : '));
sisi_c = parseInt(prompt('masukan sisi c : '));


luas = 1/2 * alas * tinggi;
keliling = sisi_a + sisi_b + sisi_c;

console.log(`luas       : ${luas.toFixed(2)} cm²`);
console.log(`keliling  : ${keliling.toFixed(2)} cm`);