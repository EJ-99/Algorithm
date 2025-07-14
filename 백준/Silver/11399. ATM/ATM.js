const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let answer = 0;
let sum = 0;

for (const time of arr) {
  sum += time;
  answer += sum;
}

console.log(answer);
