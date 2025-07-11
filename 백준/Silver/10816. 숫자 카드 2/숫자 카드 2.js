const fs = require('fs');

function findLowerBound(num, cards) {
  let left = 0,
    right = cards.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (cards[mid] < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
}

function findUpperBound(num, cards) {
  let left = 0,
    right = cards.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (cards[mid] <= num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return right;
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cards = input[1].split(' ').map(Number);
const nums = input[3].split(' ').map(Number);

const answer = [];
cards.sort((a, b) => a - b);
for (const num of nums) {
  const count = findUpperBound(num, cards) - findLowerBound(num, cards);
  answer.push(count);
}

console.log(answer.join(' '));
