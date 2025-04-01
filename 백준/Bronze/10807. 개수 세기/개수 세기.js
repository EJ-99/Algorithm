const fs = require('fs');

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const v = Number(input[2]);
const arr = input[1].split(' ').map(Number);

const result = arr.filter((num) => num === v).length;

console.log(result);
