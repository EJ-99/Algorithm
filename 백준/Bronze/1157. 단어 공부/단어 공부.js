const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const word = input.toUpperCase();
const count = new Map();
word.split('').forEach((char) => {
  count.set(char, (count.get(char) || 0) + 1);
});
const result = [...count];
result.sort((a, b) => b[1] - a[1]);

if (result.length > 1 && result[0][1] === result[1][1]) console.log('?');
else console.log(result[0][0]);
