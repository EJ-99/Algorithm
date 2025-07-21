const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const ranges = input.slice(2).map((line) => line.split(' ').map(Number));

let sum = 0;
const prefixSum = [0];
for (const num of arr) {
  sum += num;
  prefixSum.push(sum);
}

const answer = [];
for (const [s, e] of ranges) {
  answer.push(prefixSum[e] - prefixSum[s - 1]);
}

console.log(answer.join('\n'));
