const prompt = require('prompt-sync')({sigint: true});

for (let b = 1; b < 5; b++) {
    let baris = "";
    for (let k = 1; k <= 5; k++) {
        baris += k + " ";
    }    console.log(baris.trim());
}