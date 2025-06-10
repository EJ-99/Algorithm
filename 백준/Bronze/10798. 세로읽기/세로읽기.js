const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((str) => str.trim().split(''));

const length = input.reduce((acc, arr) => Math.max(acc, arr.length), 0);

let result = '';
for (let i = 0; i < length; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j].length < i + 1) continue;
    result += input[j][i];
  }
}

console.log(result);
