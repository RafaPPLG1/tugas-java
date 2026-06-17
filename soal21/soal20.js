const prompt = require('prompt-sync')({sigint: true});

let huruf = prompt("Masukkan sebuah huruf: ").toLowerCase();

if (
    huruf === "a" ||
    huruf === "i" ||
    huruf === "u" ||
    huruf === "e" ||
    huruf === "o"
){
    console.log("Huruf vokal");
} else if( huruf >= "a" && huruf <=  "z"){
    console.log("Huruf konsonan");
} else {
    console.log("Bukan huruf");
}