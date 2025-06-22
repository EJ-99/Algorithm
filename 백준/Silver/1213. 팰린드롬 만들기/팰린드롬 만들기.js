const fs = require('fs');

function makePalindrome(m) {
  let result = '';

  for (const [ch, count] of m) {
    result += Array(Math.floor(count / 2))
      .fill(ch)
      .join('');

    if (count % 2 === 0) m.delete(ch);
    else m.set(ch, 1);
  }

  if (m.size >= 2) {
    result = "I'm Sorry Hansoo";
    return result;
  }

  const odd_alp = [...m.keys()][0] || '';

  result += odd_alp + result.split('').reverse().join('');

  return result;
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

input.sort();

const m = new Map();

for (const ch of input) {
  const count = m.has(ch) ? m.get(ch) : 0;
  m.set(ch, count + 1);
}

console.log(makePalindrome(m));
