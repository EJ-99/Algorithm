const fs = require('fs');

function isBalanced(arr) {
  const st = [];
  const pair = {
    ')': '(',
    ']': '[',
  };
  for (const letter of arr) {
    if (letter === '(' || letter === '[') st.push(letter);
    else if (letter === ')' || letter === ']') {
      if (st.length === 0 || pair[letter] !== st[st.length - 1]) {
        return false;
      }
      st.pop();
    }
  }

  return st.length === 0;
}

const input = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.trimEnd());

const sentences = input.slice(0, input.length - 1).map((str) => str.split(''));

for (const sentence of sentences) {
  if (isBalanced(sentence)) console.log('yes');
  else console.log('no');
}
