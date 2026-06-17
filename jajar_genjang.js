const prompt = require('prompt-sync')({sigint: true});

let alas, tinggi, luas, keliling, sisi_miring;

alas = parseint(prompt('masukkan alas : '));
tinggi = parseint(prompt('masukkan tinggi : '));
sisi_miring = parseint(prompt('masukkan sisi miring : '));

luas = alas * tinggi;
keliling = 2 * (alas + sisi_miring);

console.log(`luas :${luas.toFixed(2)}cm2`);
console.log(`keliling :${keliling.toFixed(2)}cm`);