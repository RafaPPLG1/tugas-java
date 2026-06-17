const prompt = require('prompt-sync')({sigint: true});

const totalBaris = 5;

for (let baris = 1; baris <= totalBaris; baris++) {
    
    for (let spasi = 1; spasi <= (totalBaris - baris); spasi++) {
        process.stdout.write(" "); 
    }
    
    for (let bintang = 1; bintang <= baris; bintang++) {
        process.stdout.write("* "); 
    }
    
    console.log();
}

for (let baris = 1; baris <= totalBaris; baris++) {
    
    for (let spasi = 6; spasi <= (totalBaris + baris); spasi++) {
        process.stdout.write(" "); 
    }
    
    for (let bintang = 4; bintang >= baris; bintang--) {
        process.stdout.write("* "); 
    }
    
    console.log();
}