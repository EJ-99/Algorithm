const fs = require('fs');

function comp(a, b) {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[1] - b[1];
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const points = input.slice(1).map((line) => line.split(' ').map(Number));
points.sort(comp);

for (const point of points) {
  console.log(point[0], point[1]);
}
