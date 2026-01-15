const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const records = input.slice(1).map((record) => record.trim().split(' '));

console.log(makeWheel(n, k, records));

function makeWheel(n, k, records) {
  const wheel = Array(n).fill('?');
  const isIncluded = new Set();

  let index = 0;

  for (let i = 0; i < k; i++) {
    const cnt = Number(records[i][0]);
    const ch = records[i][1];

    index = (index + cnt) % n;

    if (wheel[index] === ch) {
      continue;
    }

    if (wheel[index] !== '?' || isIncluded.has(ch)) {
      return '!';
    }

    wheel[index] = ch;
    isIncluded.add(ch);
  }

  return printWheel(n, index, wheel);
}

function printWheel(n, index, wheel) {
  let answer = '';

  for (let i = 0; i < n; i++) {
    answer += wheel[(index - i + n) % n];
  }

  return answer;
}