const prompt = require('prompt-sync')();

function tambahSatuDetik(jamLama) {
 
  let [hh, mm, ss] = jamLama.split(':').map(Number);

 
  ss = ss + 1;

  
  if (ss === 60) {
    ss = 0;      
    mm = mm + 1; 

    
    if (mm === 60) {
      mm = 0;      
      hh = hh + 1;

     
      if (hh === 24) {
        hh = 0;   
      }
    }
  }


  let hhFormat = String(hh).padStart(2, '0');
  let mmFormat = String(mm).padStart(2, '0');
  let ssFormat = String(ss).padStart(2, '0');

 
  console.log(`Jam Lama: ${jamLama} -> Jam Baru: ${hhFormat}:${mmFormat}:${ssFormat}`);
}
