const prompt = require('prompt-sync')({sigint: true});

let luas, keliling, sisi, konstanta;

konstanta = 4;

sisi = parseInt(prompt('sisi: '))

luas = sisi * sisi;
keliling = konstanta*sisi;

console.log(`luas       : ${luas.toFixed(2)} cm²`);
console.log(`keliling  : ${keliling.toFixed(2)} cm²`);