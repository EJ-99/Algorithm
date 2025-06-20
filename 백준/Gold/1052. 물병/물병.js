const fs = require('fs');

function countBottles(n) {
  let result = 0;
  let num = n;

  while (num > 0) {
    if (num % 2 !== 0) {
      result++;
    }
    num = Math.floor(num / 2);
    continue;
  }

  return result;
}

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [n, k] = input;
let answer = 0;
let cnt = countBottles(n);

while (cnt > k) {
  answer++;

  cnt = countBottles(n + answer);
}

console.log(answer);
