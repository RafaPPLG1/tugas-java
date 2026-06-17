const prompt = require('prompt-sync')({sigint: true});

const n = 8;

let header = "  * ";
for (let k = 1; k <= n; k++) {
  header += String(k).padStart(4);
}
console.log(header);

for (let r = 1; r <= n; r++) {
  let baris = String(r).padStart(4) + " ";
  for (let k = 1; k <= n; k++) {
    baris += String(r * k).padStart(4);
  }
  console.log(baris);
}