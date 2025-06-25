const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

const q = [];
const result = [];

for (const command of commands) {
  const [op, num] = command.split(' ').map((a) => a.trim());

  switch (op) {
    case 'push':
      q.push(num);
      break;
    case 'pop':
      if (q.length === 0) result.push(-1);
      else {
        result.push(q.shift());
      }
      break;
    case 'size':
      result.push(q.length);
      break;
    case 'empty':
      result.push(Number(!q.length));
      break;
    case 'front':
      if (q.length === 0) result.push(-1);
      else {
        result.push(q[0]);
      }
      break;
    case 'back':
      if (q.length === 0) result.push(-1);
      else {
        result.push(q[q.length - 1]);
      }
  }
}

console.log(result.join('\n'));
