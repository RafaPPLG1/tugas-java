const prompt = require('prompt-sync')({sigint: true});

let kode = prompt("Masukkan kode: ");

if (kode === "78821") {
    console.log("you are authenticated");
} else {
    console.log("you have no access");
}