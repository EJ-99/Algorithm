const fs = require('fs');

function check(n, arr, p) {
  for (let i = 0; i < n; i++) {
    const card = arr[i];
    const player = p[card];

    if (i % 3 !== player) return false;
  }

  return true;
}

function mix(n, arr, s) {
  let result = [...arr];

  for (let i = 0; i < n; i++) {
    const card = arr[i];
    const pos = s[i];
    result[pos] = card;
  }

  return result;
}

function isSame(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((line) => line.trim());

const n = Number(input[0]);
const p = input[1].split(' ').map(Number);
const s = input[2].split(' ').map(Number);

const initial = new Array(n).fill(0).map((_, idx) => idx);
let arr = [...initial];
let result = 0;

while (!check(n, arr, p)) {
  arr = mix(n, arr, s);
  result++;

  if (isSame(initial, arr)) {
    result = -1;
    break;
  }
}

console.log(result);
