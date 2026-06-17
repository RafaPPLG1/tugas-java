const prompt = require('prompt-sync')({sigint: true});

let totalharga = parseInt(prompt("Masukkan total harga: "));

if (totalharga > 200000) {
    let diskon = totalharga * 0.075;
    let bayar = totalharga - diskon;
    console.log("Total harga: " + totalharga);
    console.log("Diskon: ", diskon);
    console.log("Total bayar: ",  bayar);
} else {
    console.log("Tidak mendapatkann diskon");
}