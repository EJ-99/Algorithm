const fs = require('fs');

function isValid(num) {
  while (num) {
    if (num % 1000 === 666) return true;

    num = Math.floor(num / 10);
  }

  return false;
}

const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

let cnt = 1,
  current = 666;

while (cnt < n) {
  current += 1;

  if (isValid(current)) {
    cnt++;
  }
}

console.log(current);
