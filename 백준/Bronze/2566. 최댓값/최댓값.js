const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((str) => str.trim().split(' ').map(Number));

let maxNum = 0;
let r = -1,
  c = -1;

for (const row of input) {
  maxNum = Math.max(maxNum, ...row);
}

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] === maxNum) {
      r = i + 1;
      c = j + 1;
      break;
    }
  }

  if (r !== -1) break;
}

console.log(maxNum);
console.log(r, c);
