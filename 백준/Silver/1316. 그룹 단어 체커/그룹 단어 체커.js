const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = 0;
const n = Number(input[0]);
const words = input.slice(1).map((a) => a.trim());

for (const word of words) {
  let isGroupWord = true;
  const check = [];

  for (let i = 0; i < word.length; i++) {
    if (!check.includes(word[i])) {
      check.push(word[i]);
      continue;
    } else if (word[i - 1] !== word[i]) {
      isGroupWord = false;
      break;
    }
  }

  if (isGroupWord) result++;
}

console.log(result);
