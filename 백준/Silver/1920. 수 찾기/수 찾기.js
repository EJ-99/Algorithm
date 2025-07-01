const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function findNum(num, arr) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) return 1;
    if (arr[mid] > num) right = mid - 1;
    else left = mid + 1;
  }

  return 0;
}

const arr = input[1].split(' ').map(Number);
const nums = input[3].split(' ').map(Number);
const result = [];
arr.sort((a, b) => a - b);

for (const num of nums) {
  result.push(findNum(num, arr));
}

console.log(result.join('\n'));
