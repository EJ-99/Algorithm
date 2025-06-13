const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0].trim());
const students = input.slice(1).map((student) => student.trim().split(' '));

function compare(a, b) {
  if (a[1] !== b[1]) return Number(b[1]) - Number(a[1]);
  if (a[2] !== b[2]) return Number(a[2]) - Number(b[2]);
  if (a[3] !== b[3]) return Number(b[3]) - Number(a[3]);

  if (a[0] < b[0]) return -1;
  else return 1;
}

students.sort(compare);

for (const student of students) console.log(student[0]);
