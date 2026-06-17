const prompt = require('prompt-sync')({sigint: true});

const daftarHuruf = ['a', 'b', 'c', 'd', 'e'];

for (let baris = 0; baris < daftarHuruf.length; baris++) {
    
    for (let kolom = 1; kolom <= 5; kolom++) {
        process.stdout.write(daftarHuruf[baris] + " ");
    }
    
    console.log();
}