const prompt = require('prompt-sync')({sigint: true});

const huruf = ["A", "B", "C", "D"];
let j = 0;
do {
    console.log(huruf[j] + ". Cerdas");
    j++;
}while (j < 4);