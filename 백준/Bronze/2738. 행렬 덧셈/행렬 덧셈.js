const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((str) => str.trim().split(' ').map(Number));

const [n, m] = input[0];
const arr1 = input.slice(1, 1 + n);
const arr2 = input.slice(n + 1);

const result = [];

for (let i = 0; i < n; i++) {
  const row = [];
  for (let j = 0; j < m; j++) {
    row.push(arr1[i][j] + arr2[i][j]);
  }

  result.push(row);
}

for (const row of result) {
  console.log(row.join(' '));
}
