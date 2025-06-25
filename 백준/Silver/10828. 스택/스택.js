const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

const st = [];
const result = [];

for (const command of commands) {
  const [op, num] = command.split(' ').map((a) => a.trim());

  switch (op) {
    case 'push':
      st.push(num);
      break;
    case 'pop':
      if (st.length === 0) result.push(-1);
      else {
        result.push(st[st.length - 1]);
        st.pop();
      }
      break;
    case 'size':
      result.push(st.length);
      break;
    case 'empty':
      result.push(Number(!st.length));
      break;
    case 'top':
      if (st.length === 0) result.push(-1);
      else {
        result.push(st[st.length - 1]);
      }
  }
}

console.log(result.join('\n'));
