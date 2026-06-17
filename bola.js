const prompt = require ('prompt-sync')({sigint: true});

let r, volume, luas_permukaan;

r = parseint(prompt('masukkan nilai jari-jari : '));

volume = 4/3 * Math.PI * r * r * r;
luas_permukaan = 4 * Math.PI * r * r;

console.log(`volume :${volume.toFixed(2)}cm3`);
console.log(`luas permukaan :${luas_permukaan.toFixed(2)}cm2`)