//'/dev/stdin'
const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);
let answer = [];
for (let i = 1; i <= t * 2; i += 2) {
  const [n, m] = input[i].split(' ').map(Number);
  const arr = input[i + 1].split(' ').map(Number);

  let idx = m;
  let count = 0;
  while (true) {
    const maxNum = Math.max(...arr);
    const current = arr.shift();

    if (current === maxNum) {
      count++;

      if (idx === 0) {
        answer.push(count);
        break;
      }
    } else {
      arr.push(current);
    }

    idx = (idx - 1 + arr.length) % arr.length;
  }
}

console.log(answer.join('\n'));
