const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number).reverse();

let answer = 0;
for (const num of arr) {
  if (answer < num) {
    answer = num;
  } else {
    answer = (Math.floor((answer - 1) / num) + 1) * num;
  }
}

console.log(answer);
