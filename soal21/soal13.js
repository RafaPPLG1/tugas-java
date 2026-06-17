const prompt = require('prompt-sync')({ sigint: true });

let harga = parseInt(prompt("Masukkan harga: "));

let pajak = harga * 0.10;
let fee = harga * 0.05;
let bayar = harga + pajak + fee;

console.log(`harga makanan: Rp ${harga.toFixed(3)}`);
console.log(`pajak: Rp ${pajak.toFixed(3)}`);
console.log(`fee: Rp ${fee.toFixed(3)}`);
console.log(`total yang harus dibayar: Rp ${bayar.toFixed(3)}`);