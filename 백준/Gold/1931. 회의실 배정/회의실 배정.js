const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function comp(a, b) {
  if (a[1] !== b[1]) return a[1] - b[1];
  return a[0] - b[0];
}

const n = Number(input[0]);
const meetingInfo = input.slice(1).map((line) => line.split(' ').map(Number));

meetingInfo.sort(comp);

let answer = 0;
let end = meetingInfo[0][0];
for (const duration of meetingInfo) {
  if (end <= duration[0]) {
    answer++;
    end = duration[1];
  }
}

console.log(answer);
