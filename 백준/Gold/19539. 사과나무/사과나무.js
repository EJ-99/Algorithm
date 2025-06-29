const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const trees = input[1].split(' ').map(Number);

let sum = 0;
let oddHeightCount = 0;
for (const height of trees) {
  sum += height;
  if (height % 2 !== 0) oddHeightCount++;
}
const answer = sum % 3 === 0 && oddHeightCount <= sum / 3;

if (answer) console.log('YES');
else console.log('NO');
