const prompt = require('prompt-sync')({ sigint: true });

let R = parseInt(prompt("masukan jari-jari: "));
let volume = (4/3)* Math.PI*Math.pow(R,3);
let luas = 4 * Math.PI * Math.pow(R,2);

console.log(`volume bola: ${volume.toFixed(2)}cm³`);
console.log(`luas permukaan bola: ${luas.toFixed(2)}cm²`);