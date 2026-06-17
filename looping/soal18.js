const prompt = require('prompt-sync')({sigint: true});

const jml = 2;
for (let baris = 1; baris <= 5; baris++) {
  let row = "";
  for (let kali = 1; kali <= jml; kali++) {
    row += `${kali} x ${baris} = ${kali * baris}`.padEnd(12);
  }
  console.log(row.trimEnd());
}