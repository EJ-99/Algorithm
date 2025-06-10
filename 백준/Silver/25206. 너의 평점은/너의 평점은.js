const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((str) => str.trim().split(' '));

const grades = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalCredit = 0;
const sum = input.reduce((acc, subject) => {
  if (subject[2] === 'P') return acc;

  acc += Number(subject[1]) * grades[subject[2]];
  totalCredit += Number(subject[1]);

  return acc;
}, 0);

console.log(sum / totalCredit);
