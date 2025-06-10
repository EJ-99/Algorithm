const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((str) => str.trim().split(' ').map(Number));

const board = new Array(100).fill(0).map((_) => new Array(100).fill(0));

const pos = input.slice(1);

for (const [c, r] of pos) {
  for (let i = r - 1; i < r + 9; i++) {
    for (let j = c - 1; j < c + 9; j++) {
      board[i][j] = 1;
    }
  }
}

const result = board.reduce((acc, line) => {
  return acc + line.filter((num) => num === 1).length;
}, 0);

console.log(result);
