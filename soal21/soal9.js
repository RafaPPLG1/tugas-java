const prompt = require('prompt-sync')({ sigint: true });

let p = parseInt(prompt('Masukkan panjang: '));
let l = parseInt(prompt('Masukkan lebar: '));

let luas = p * l;
let keliling = 2 * (p + l);

console.log('luas: ' + luas);
console.log('keliling: ' + keliling);