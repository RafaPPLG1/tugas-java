const prompt = require("prompt-sync")({ sigint: true });

let judul = prompt("Masukkan judul buku: ");
let penerbit = prompt("masukan penerbit: ");
let jumlah = prompt("masukan jumlah buku: ");
let tanggal = prompt("Tanggal pembelian: ");

console.log("Judul Buku: " + judul);
console.log("penerbit: " + penerbit);
console.log("Jumlah Buku: " + jumlah);
console.log("Tanggal Pembelian: " + tanggal);