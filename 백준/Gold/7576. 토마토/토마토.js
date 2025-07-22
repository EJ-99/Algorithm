const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((line) => line.split(' ').map(Number));

const q = initQueue(n, m, arr);
console.log(calcDuration(q, arr));

function initQueue(n, m, arr) {
  const result = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) result.push([i, j]);
    }
  }

  return result;
}

function calcDuration(q, arr) {
  let result = 0;
  while (true) {
    q = visit(q, arr);
    if (q.length === 0) break;
    result++;
  }

  return checkPossible(arr) ? result : -1;
}

function visit(q, arr) {
  let cr, cc;
  const result = [];
  const dr = [0, 0, 1, -1];
  const dc = [1, -1, 0, 0];

  for (const [cr, cc] of q) {
    for (let i = 0; i < 4; i++) {
      const nr = cr + dr[i];
      const nc = cc + dc[i];

      if (
        nr < 0 ||
        nc < 0 ||
        nr >= arr.length ||
        nc >= arr[0].length ||
        arr[nr][nc] !== 0
      )
        continue;

      result.push([nr, nc]);
      arr[nr][nc] = 1;
    }
  }

  return result;
}

function checkPossible(arr) {
  for (const row of arr) {
    for (const num of row) {
      if (num === 0) return false;
    }
  }
  return true;
}
