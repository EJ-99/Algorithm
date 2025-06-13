const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = 0;
const [n, m] = input[0].split(' ').map(Number);
const set = new Set(input.slice(1, n + 1).map((word) => word.trim()));
const words = input.slice(n + 1).map((word) => word.trim());

for (const word of words) {
  if (set.has(word)) result++;
}

console.log(result);
