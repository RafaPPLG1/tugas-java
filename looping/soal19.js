const prompt = require('prompt-sync')({sigint: true});

const nilai = [80, 90, 75, 85, 95];
let jumlah = 0;

for (let i = 0; i < nilai.length; i++) {
  jumlah += nilai[i];
}
const rata = jumlah / nilai.length;
console.log("Jumlah   : " + jumlah);
console.log("Rata-rata: " + rata.toFixed(2));