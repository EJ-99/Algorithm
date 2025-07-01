const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.slice(1).map(Number);
arr.sort((a, b) => a - b);

console.log(arr.join('\n'));
