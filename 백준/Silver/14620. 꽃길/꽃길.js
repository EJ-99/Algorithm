const fs = require('fs');

const input = fs.readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((line) => line.trim());

const n = Number(input[0]);
const arr = input.slice(1).map((line) => line.split(' ').map(Number));
const visited = new Array(n).fill(0).map((_) => new Array(n).fill(false));
const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let answer = 200 * 5 * 3;

function calcCost(row, col) {
  let result = arr[row][col];
  visited[row][col] = true;

  for (let i = 0; i < 4; i++) {
    const nr = row + dir[i][0];
    const nc = col + dir[i][1];
    visited[nr][nc] = true;
    result += arr[nr][nc];
  }

  return result;
}

function findMinCost(total, count) {
  if (count === 3) {
    answer = Math.min(answer, total);
    return;
  }

  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (visited[i][j]) continue;

      let isPossible = true;
      for (let k = 0; k < 4; k++) {
        let nr = i + dir[k][0];
        let nc = j + dir[k][1];

        if (visited[nr][nc]) {
          isPossible = false;
          break;
        }
      }

      if (!isPossible) continue;

      const sum = calcCost(i, j);
      findMinCost(total + sum, count + 1);
      visited[i][j] = false;
      for (let k = 0; k < 4; k++) {
        const nr = i + dir[k][0];
        const nc = j + dir[k][1];
        visited[nr][nc] = false;
      }
    }
  }
}

findMinCost(0, 0);
console.log(answer);
