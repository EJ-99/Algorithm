const fs = require('fs');

function isVPS(ps) {
  const st = [];

  for (const parenthesis of ps) {
    if (parenthesis === '(') {
      st.push(parenthesis);
      continue;
    }
    if (st.length === 0) {
      return false;
    }
    st.pop();
  }

  return st.length === 0;
}

const [n, ...arr] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.trim());

const answer = [];
for (const str of arr) {
  answer.push(isVPS(str) ? 'YES' : 'NO');
}

console.log(answer.join('\n'));
