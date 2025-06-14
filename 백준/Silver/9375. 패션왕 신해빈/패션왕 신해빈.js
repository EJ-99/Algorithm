const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((line) => line.trim());

let t = Number(input[0]);
let arr = input.slice(1);
let idx = 0;

while (t--) {
  let result = 1;
  const m = new Map();
  const n = Number(arr[idx]);
  const clothes = arr
    .slice(idx + 1, idx + n + 1)
    .map((item) => item.split(' '));

  for (const item of clothes) {
    const [name, type] = item;

    m.set(type, m.has(type) ? m.get(type) + 1 : 1);
  }

  for (const [key, value] of m) {
    result *= value + 1;
  }

  console.log(result - 1);

  idx += n + 1;
}
