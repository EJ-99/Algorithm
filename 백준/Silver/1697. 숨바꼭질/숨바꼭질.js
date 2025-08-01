const fs = require('fs');

const MAX_RANGE = 100000;
const MIN_RANGE = 0;

const [n, k] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

console.log(bfs(n, k));

function bfs(n, k) {
  let idx = 0;
  const q = [[n, 0]];
  const visited = Array(MAX_RANGE + 1)
    .fill(0)
    .map((_) => false);
  visited[n] = true;

  while (idx < q.length) {
    const currentPos = q[idx][0];
    const time = q[idx][1];
    idx++;

    if (currentPos === k) return time;

    if (checkPossible(currentPos + 1, visited)) {
      q.push([currentPos + 1, time + 1]);
      visited[currentPos + 1] = true;
    }

    if (checkPossible(currentPos - 1, visited)) {
      q.push([currentPos - 1, time + 1]);
      visited[currentPos - 1] = true;
    }

    if (checkPossible(currentPos * 2, visited)) {
      q.push([currentPos * 2, time + 1]);
      visited[currentPos * 2] = true;
    }
  }

  return result;
}

function checkPossible(nextPos, visited) {
  if (visited[nextPos] || nextPos < MIN_RANGE || nextPos > MAX_RANGE)
    return false;
  return true;
}
