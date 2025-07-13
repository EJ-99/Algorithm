const fs = require('fs');

const [n, ...arr] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const st = [];
const answer = [];
let nextNum = 1;
for (const num of arr) {
  while (nextNum <= num) {
    st.push(nextNum);
    answer.push('+');
    nextNum++;
  }

  if (st[st.length - 1] === num) {
    st.pop();
    answer.push('-');
  } else {
    break;
  }
}

if (st.length === 0) console.log(answer.join('\n'));
else console.log('NO');
