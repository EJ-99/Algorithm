const fs = require('fs');

function getPriority(operator) {
  if (operator === '(') return 0;
  if (operator === '+' || operator === '-') return 1;

  return 2;
}

function transformPostfix(input) {
  let result = '';
  const st = [];

  for (let i = 0; i < input.length; i++) {
    const current = input[i];

    if (current === '(') st.push(current);
    else if (current === ')') {
      while (st.length !== 0 && st[st.length - 1] !== '(') {
        result += st[st.length - 1];
        st.pop();
      }
      st.pop();
    } else if (
      current === '+' ||
      current === '-' ||
      current === '*' ||
      current === '/'
    ) {
      while (
        st.length !== 0 &&
        getPriority(st[st.length - 1]) >= getPriority(current)
      ) {
        result += st[st.length - 1];
        st.pop();
      }
      st.push(current);
    } else {
      result += current;
    }
  }

  while (st.length !== 0) {
    result += st[st.length - 1];
    st.pop();
  }

  return result;
}

const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(transformPostfix(input));
