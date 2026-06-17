const prompt = require('prompt-sync')({sigint: true});

let r, tinggi, sisi, volume, luas_permukaan; 

r = parseInt(prompt('masukan nilai jari-jari : '));
tinggi = parseInt(prompt('masukan nilai tinggi : '));

volume = 1/3 * Math.PI * r * r * tinggi;
luas_permukaan = Math.PI * r * (r + Math.sqrt(tinggi * tinggi + r * r));

console.log(`volume   :${volume.toFixed(2)}cm³`);
console.log(`luas permukaan   :${luas_permukaan.toFixed(2)}cm²`);