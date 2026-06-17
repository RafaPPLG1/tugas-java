const prompt = require('prompt-sync')({sigint: true});

let total, i;
total = 0;

for (i = 1; i <= 5; i++) {
    console.log(i);
    total += i;
};

console.log('--+');
console.log(total);