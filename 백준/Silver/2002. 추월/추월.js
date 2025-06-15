const fs = require('fs');

function getOvertakingCount(n, orderOut) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (orderOut[i] > orderOut[j]) {
        result++;
        break;
      }
    }
  }

  return result;
}

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((line) => line.trim());

const n = Number(input[0]);
const infoIn = input.slice(1, n + 1);
const infoOut = input.slice(n + 1);

const orderIn = new Map();
const orderOut = [];

infoIn.forEach((car, idx) => {
  orderIn.set(car, idx);
});

for (const car of infoOut) {
  orderOut.push(orderIn.get(car));
}

console.log(getOvertakingCount(n, orderOut));
