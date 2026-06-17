const prompt = require('prompt-sync')({ sigint: true });

let nama = prompt("Masukkan nama Anda: ");

console.log("Apakabar " + nama + "? Wish you luck!");