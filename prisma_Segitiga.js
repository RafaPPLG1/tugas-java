const prompt = require('prompt-sync')({sigint: true});

let volume, luas_permukaan, l_alas, tinggi, k_alas;

l_alas = parseInt(prompt('masukan nilai luas alas : '));
tinggi = parseInt(prompt('masukan nilai tinggi : '));
k_alas = parseInt(prompt('masukan nilai keliling alas : '));

volume = l_alas * tinggi;
luas_permukaan = 2 * l_alas + k_alas * tinggi;

console.log(`volume :${volume.toFixed(2)}cm³`);
console.log(`luas permukaan :${luas_permukaan.toFixed(2)}cm²`);