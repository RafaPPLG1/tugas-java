const prompt = require('prompt-sync')({sigint: true});

let juara = parseInt(prompt("Masukkan juara: "));

if (juara === 1) {
    console.log("Selamat, Anda juara Utama!");
} else if (juara === 2) {
    console.log("Selamat, Anda Runner Up!");
} else if (juara === 3) {
    console.log("Selamat, Anda juara Ketiga!");
} else {
    console.log("Inputan Anda salah!");
}