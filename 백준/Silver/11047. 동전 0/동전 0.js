const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number).reverse();

let answer = 0;
let rest = k;
for (const value of arr) {
  if (value > rest) continue;
  answer += Math.floor(rest / value);
  rest -= Math.floor(rest / value) * value;
}

console.log(answer);
