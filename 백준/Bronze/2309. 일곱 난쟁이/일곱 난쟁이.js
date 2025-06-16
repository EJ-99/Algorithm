const fs = require('fs');
const COUNT = 9;

function select(arr, sum) {
  for (let i = 0; i < COUNT - 1; i++) {
    for (let j = i + 1; j < COUNT; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        return [
          ...arr.slice(0, i),
          ...arr.slice(i + 1, j),
          ...arr.slice(j + 1),
        ];
      }
    }
  }
}

const input = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let sum = input.reduce((acc, cur) => acc + cur, 0);

const result = select(input, sum).sort((a, b) => a - b);
for (const num of result) console.log(num);