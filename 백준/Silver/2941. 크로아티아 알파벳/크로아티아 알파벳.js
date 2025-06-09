const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let result = 0;
const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (const a of croatia) {
  for (const temp of input.matchAll(a)) {
    result++;
    const start = temp.index;
    const arr = input.split('');
    arr.splice(start, a.length, '*'.repeat(a.length));
    input = arr.join('');
  }
}

result += input.split('*').join('').length;
console.log(result);
