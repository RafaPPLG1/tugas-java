const prompt = require('prompt-sync')({sigint: true});

let b = 0;
while (b < 5){
     let baris = "", k = 0;
     do {
        baris += "a ";
        k++;

     } while (k < 5);
     console.log(baris.trim());
     b++;
}