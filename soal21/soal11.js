const prompt = require('prompt-sync')({ sigint: true });

let XRPL1 = parseInt(prompt("Masukkan jumlah XRPL1: "));
let XRPL2 = parseInt(prompt("Masukkan jumlah XRPL2: "));
let XTJKT1 = parseInt(prompt("Masukkan jumlah XTJKT1: "));
let XTJKT2 = parseInt(prompt("Masukkan jumlah XTJKT2: "));

let total = XRPL1 + XRPL2 + XTJKT1 + XTJKT2;

console.log("Total jumlah siswa: " + total);