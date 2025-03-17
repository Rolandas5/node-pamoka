// fs - failu sistemos modulis, kuri turi pats Node.js
// import { readFile, writeFile, mkdir } from 'fs';

// const fs = require('fs');

// fs.readFile('./dokumentai/uzrasai.txt', (error, data) => {
//   if (error) {
//     console.log('Nepavyko perskaityti failo');
//     return;
//   }

//   console.log(data.toString());
// });

//
//
//
// const fs = require('fs');

// // Failo nuskaitymas
// fs.readFile('./dokumentai/uzraseliai.txt', (error, data) => {
//   if (error) {
//     // Jei failo nuskaityti nepavyksta, rodome klaidos pranešimą
//     console.log('Nepavyko perskaityti failo');
//     return;
//   }

//   // Konvertuojame duomenis į stringą
//   const text = data.toString();

//   if (text.length === 0) {
//     console.log('Failas yra tuščias');
//   } else {
//     console.log('Failo ilgis:', text.length);
//   }

//   // Keičiam failo turinį
//   fs.writeFile('./dokumentai/uzraseliai.txt', 'Pakeistas turinys!', (error) => {
//     if (error) {
//       console.log('Nepavyko pakeisti failo turinio');
//     } else {
//       console.log('Failo turinys buvo pakeistas!');
//     }
//   });
// });

// // Naujo aplanko kurimas
// // { recursive: true } - leidzia sukurti aplanka jei jis neegzistuoja ir praleidzia jei jis egzistuoja
// fs.mkdir('./dokumentai/nauji-uzrasai', { recursive: true }, (error) => {
//   if (error) {
//     console.log('Nepavyko sukurti aplanko');
//   }
// });

//
//
// Sukurkite nauji-uzrasai aplanke, nauji-uzrasai.txt faila su tekstu "cia yra nauji uzrasai"

const { error } = require('console');
const fs = require('fs');

// failo kelias ir turinys
const filePath = './dokumentai/nauji-uzrasai/nauji-uzrasai.txt';
const content = 'cia yra nauji uzrasai';

// Sukuriam nauja katalogą
fs.mkdir('./dokumentai/nauji-uzrasai', { recursive: true }, (error) => {
  if (error) {
    console.log('Nepavyko sukurti katalogo:', error);
    return;
  }

  // Sukuriam failą su tekstu: "cia yra nauji uzrasai"
  fs.writeFile(filePath, content, (error) => {
    if (error) {
      console.log('Nepavyko sukurti failo:', error);
    } else {
      console.log('Failas buvo sukurtas su tekstu!');
    }
  });
});

//
//
// Keliu folderiu sukurimas
const directories = ['projektas/duomenyd', 'projektas/ataskaitos'];

directories.forEach((directory) => {
  fs.mkdir(directory, { recursive: true }, (error) => {
    if (error) {
      console.log('Nepavyko sukurti aplanko');
    } else {
      console.log('Folderius sukurti pavyko');
    }
  });
});
