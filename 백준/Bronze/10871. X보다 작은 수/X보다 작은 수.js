const fs = require('fs');

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const x = input[0].split(' ').map(Number)[1];
const arr = input[1].split(' ').map(Number);

const result = arr.filter((num) => num < x);

console.log(result.join(' '));
