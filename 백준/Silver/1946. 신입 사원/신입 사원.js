const fs = require('fs');
const input = fs.readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((line) => line.trim());

let t = Number(input[0]);
let arr = input.slice(1);
let count = 0;

while (t--) {
  const n = Number(arr[count]);
  const ranking = arr
    .slice(count + 1, count + n + 1)
    .map((str) => str.split(' ').map(Number));

  ranking.sort((a, b) => a[0] - b[0]);

  let result = 1;
  let current = ranking[0][1];

  for (let i = 1; i < n; i++) {
    if (ranking[i][1] < current) {
      current = ranking[i][1];
      result++;
    }
  }

  console.log(result);
  count += n + 1;
}
