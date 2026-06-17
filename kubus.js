const prompt = require('prompt-sync')({sigint: true});

let volume, luas_permukaan, s;

s = parseInt(prompt('masukan nilai sisi : '));

volume = s * s * s;
keliling = 6 * s * s;

console.log(`volume   :${volume.toFixed(2)}cm³`);
console.log(`luas permukaan   :${keliling.toFixed(2)}cm²`);