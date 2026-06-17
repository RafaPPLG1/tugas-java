const prompt = require('prompt-sync')({sigint: true});

let s =  "", t = 0; n = 2;
do {
    s += n;
    t += n;
    if (n < 10) s += " + ";
    n += 2;
}
while (n <= 10);
console.log(s + " = " + t);