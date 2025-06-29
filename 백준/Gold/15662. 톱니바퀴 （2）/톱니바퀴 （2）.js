const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const wheels = input
  .slice(1, n + 1)
  .map((line) => line.trim().split('').map(Number));
const k = Number(input[n + 1]);
const commands = input.slice(n + 2).map((line) => line.split(' ').map(Number));
const list = [];

function check(current, dir, visited) {
  if (current - 1 >= 0 && visited[current - 1] === 0) {
    if (wheels[current][6] !== wheels[current - 1][2]) {
      list.push([current - 1, dir * -1]);
      visited[current - 1] = 1;
      check(current - 1, dir * -1, visited);
    }
  }
  if (current + 1 < n && visited[current + 1] === 0) {
    if (wheels[current][2] !== wheels[current + 1][6]) {
      list.push([current + 1, dir * -1]);
      visited[current + 1] = 1;
      check(current + 1, dir * -1, visited);
    }
  }
}

for (const [idx, dir] of commands) {
  list.push([idx - 1, dir]);
  const visited = Array(n).fill(0);
  visited[idx - 1] = 1;
  check(idx - 1, dir, visited);

  while (list.length > 0) {
    const [idx, dir] = list.pop();

    if (dir === 1) {
      const num = wheels[idx].pop();
      wheels[idx].unshift(num);
    } else {
      const num = wheels[idx].shift();
      wheels[idx].push(num);
    }
  }
}

let answer = 0;
for (const wheel of wheels) {
  if (wheel[0] === 1) answer++;
}

console.log(answer);
