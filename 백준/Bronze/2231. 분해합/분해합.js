const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);
let result = 0;

for (let i = 1; i <= n; i++) {
  let sum = i;
  let num = i;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  //console.log(i, sum);
  if (sum === n) {
    result = i;
    break;
  }
}

console.log(result);
