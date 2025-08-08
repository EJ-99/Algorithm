const fs = require('fs');

const expression = fs.readFileSync('/dev/stdin').toString().trim();
const expressionsWithPlus = expression.split('-');

let answer = add(expressionsWithPlus[0]) * 2;
for (const expression of expressionsWithPlus) {
  answer -= add(expression);
}

console.log(answer);

function add(exp) {
  const numbers = exp.split('+').map(Number);

  return numbers.reduce((acc, cur) => acc + cur, 0);
}
