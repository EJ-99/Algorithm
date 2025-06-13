const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0].trim());
const nums = input.slice(1).map((num) => num.trim());

function calcSerialSum(arr) {
  return arr.split('').reduce((acc, cur) => {
    if (isNaN(cur)) return acc;
    return acc + Number(cur);
  }, 0);
}

function compare(a, b) {
  if (a.length !== b.length) return a.length - b.length;

  const sumA = calcSerialSum(a);
  const sumB = calcSerialSum(b);

  if (sumA !== sumB) return sumA - sumB;

  if (a < b) return -1;
  else return 1;
}

nums.sort(compare);

for (const num of nums) console.log(num);
