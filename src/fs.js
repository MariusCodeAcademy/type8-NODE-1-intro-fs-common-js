const fs = require('fs');

// console.log('fs ===', fs);

// fs.writeFile('failo pavadinimas su keliu', 'duomenys i faila', callback funkcija su klaidos objektu)
function write() {
  fs.writeFile('../dist/style.css', 'Username=James\nage=25', (err) => {
    if (err) {
      console.warn(err);
      return;
    }
    console.log('failas sukurtas');
  });
}
// write();
// read files
const read = () => {
  fs.readFile('./new.txt', (err, data) => {
    if (err) {
      console.warn(err);
      return;
    }
    console.log('data ===', data.toString());
  });
};

// delete
if (fs.existsSync('./deleteMe.txt')) {
  console.log('fileFound');
  fs.unlink('./deleteMe.txt', (err) => {
    if (err) {
      console.warn(err);
      return;
    }
    console.log('Files istrintas');
  });
} else {
  console.log('file Not Found');
}
