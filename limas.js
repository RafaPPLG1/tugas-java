const prompt = require('prompt-sync')({sigint: true });

let volume, luas_permukaan,l_alas, tinggi, l_selubung;

l_alas = parseInt(prompt('masukan nilai luas alas : '));
tinggi = parseInt(prompt('masukan nilai tinggi : '));
l_selubung = parseInt(prompt('masukan nilai luas selubung : '));

volume = 1/3 * l_alas * tinggi;
luas_permukaan = l_alas + l_selubung;

console.log(`volume :${volume.toFixed(2)}cm³`);
console.log(`luas permukaan :${luas_permukaan.toFixed(2)}cm²`);