// import casual
const casual = require('casual');

const sent1 = casual.sentence;

// console.log('sent1 ===', sent1);

// funkcijos generateAddress() pagalba sugeneruoti random adressa is casual
// funkcija turetu grazinti objekta kuris turi country, city, state ,  address

const generateAddress = () => {
  return {
    country: casual.country,
    city: casual.city,
    state: casual.state,
    address: casual.address,
  };
};

const c1 = generateAddress();
// console.log('c1 ===', c1);

const d1 = casual.date('DD-MMM-YYYY');
console.log('d1 ===', d1);

// casual.js sukuriam funkcija kuri generuoja useri su 3 savybem

// exportuojam ta funkcija ir panaudojam ja index.js

module.exports = {
  generateAddress,
};
