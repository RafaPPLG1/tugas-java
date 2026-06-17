const prompt = require('prompt-sync')({sigint: true});
for (let i = 1; i <= 4; i++) {
  console.log("*".repeat(i));
}
console.log("*".repeat(7));
for (let i = 4; i >= 1; i--) {
  console.log("*".repeat(i));
}