const prompt = require('prompt-sync')();

let panjang, lebar, tinggi, volume, luas_permukaan;

panjang = parseFloat(prompt('Masukan nilai panjang : '));
lebar = parseFloat(prompt('Masukan nilai lebar : '));
tinggi = parseFloat(prompt('Masukan nilai tinggi : '));

volume = panjang * lebar * tinggi;
luas_permukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);

console.log(`Volume : ${volume.toFixed(2)} cm³`);
console.log(`Luas permukaan : ${luas_permukaan.toFixed(2)} cm²`);