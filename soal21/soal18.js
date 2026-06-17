const prompt = require('prompt-sync')({});

let bilangan = parseInt(prompt("Masukkan bilangan: "));

if (bilangan % 7 === 0) {
    console.log("kelipatan 7");
} else {
    console.log("Anda belum beruntung");
}