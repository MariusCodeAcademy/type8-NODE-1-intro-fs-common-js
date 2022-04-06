const fs = require('fs');

// console.log('fs ===', fs);

// fs.writeFile('failo pavadinimas su keliu', 'duomenys i faila', callback funkcija su klaidos objektu)
fs.writeFile('../dist/style.css', 'Username=James\nage=25', (err) => {
  if (err) {
    console.warn(err);
    return;
  }
  console.log('failas sukurtas');
});

// read files
