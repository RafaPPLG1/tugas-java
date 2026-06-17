const prompt = require('prompt-sync')({sigint: true});
let i = 5;
while (i > 0 ) {
    console.log("*".repeat(i));
    i--;
}