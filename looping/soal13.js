const prompt = require('prompt-sync')({sigint: true});
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}
let j = 4;
do {
  console.log("*".repeat(j));
  j--;
} while (j >= 1);