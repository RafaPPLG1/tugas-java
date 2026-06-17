const prompt = require('prompt-sync')({sigint: true});
let str = ""; total = 0;
for (let i = 1; i <= 5; i++) {
 str += i;
 total += i;
 if (i < 5) str += " + ";
}
console.log(str + " = " + total);