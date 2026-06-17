const prompt = require('prompt-sync')({sigint: true});

let s = "", t = 0;
for (let i = 1; i <= 5; i += 2){
    s += i;
    t += i;
    if (i < 5) s += " + ";
    }   
    console.log(s + " = " + t);