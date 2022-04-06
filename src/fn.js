// console.log('hello world in app.js');

function add(num1, num2) {
  const sum = num1 + num2;
  console.log(`If you add ${num1} and ${num2} you will get ${sum}`);
  return sum;
}

const baseUrl = 'http://localhost:3000';

// console.log({ baseUrl });
// export default
// module.exports = add;
// named export
module.exports = {
  add,
  baseUrl,
};
