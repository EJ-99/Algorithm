const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);
let answer = -1;
let count = Math.floor(n / 5);

while (count >= 0) {
  const rest = n - count * 5;
  if (rest % 3 === 0) {
    answer = count + rest / 3;
    break;
  }
  count--;
}

console.log(answer);
