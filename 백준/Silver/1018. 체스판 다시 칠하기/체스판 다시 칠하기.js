const fs = require('fs');

const SIZE = 8;

function count(startPos, color, arr) {
  let result = 0;
  const [r, c] = startPos;

  let current = color;
  for (let i = r; i < r + 8; i++) {
    for (let j = c; j < c + 8; j++) {
      if (arr[i][j] !== current) result++;
      current = current === 'W' ? 'B' : 'W';
    }
    current = current === 'W' ? 'B' : 'W';
  }

  return result;
}

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.trim());

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((line) => line.trim());

let answer = SIZE * SIZE;
for (let i = 0; i <= n - 8; i++) {
  for (let j = 0; j <= m - 8; j++) {
    answer = Math.min(count([i, j], 'W', arr), count([i, j], 'B', arr), answer);
  }
}

console.log(answer);
