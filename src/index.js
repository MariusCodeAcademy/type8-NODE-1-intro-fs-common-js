const { add, baseUrl } = require('./fn');
const { generateAddress } = require('./casual');

// console.log('fn ===', fn);
console.log('baseUrl ===', baseUrl);

const rez1 = add(10, 50);
// const rez2 = add(20, 70);

// const totalAmmount = rez1 + rez2;
// console.log('totalAmmount ===', totalAmmount);

// commonJs export - module.exports = {sum}
// commonJs import - const sum = require('./fn')

// ES6 module export - export, export default
// ES6 module import - import {sum} from './fn.js'

console.log('index.js', generateAddress());
