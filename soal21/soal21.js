const prompt = require('prompt-sync')({sigint: true});

let siswa = prompt("Masukan nama siswa: ");
let nilai = parseInt(prompt("Masukan nilai siswa: "));

let grade;
if (nilai >= 90 && nilai <= 100) {
    grade = "A";
} else if (nilai >= 80) {
    grade = "B";
} else if (nilai >= 70) {
    grade = "C";
} else if ( nilai >= 60) {
    grade = "D"
} else {
    grade = "E"
}

console.log("Nama siswa: ", siswa);
console.log("Nilai: ", nilai);
console.log("Grade: ", grade);