const prompt = require('prompt-sync')({sigint: true});

let baris = "";
for (let i = 1; i <= 5; i++) {
    baris += i + " ";
}
console.log(baris.trim() + " = 15 ");