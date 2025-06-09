const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const reversed = [...input].reverse().join('');

if (input === reversed) console.log(1);
else console.log(0);
