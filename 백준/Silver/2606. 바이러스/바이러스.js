const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

const graph = Array(n + 1)
  .fill('')
  .map((_) => []);

for (const str of input.slice(2)) {
  const [a, b] = str.split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

console.log(bfs(1, n, graph));

function bfs(start, n, graph) {
  let result = 0;
  const q = [];
  const visited = Array(n).fill(false);

  q.push(start);
  visited[start] = true;

  while (q.length) {
    const current = q[q.length - 1];
    q.pop();

    for (const next of graph[current]) {
      if (visited[next]) continue;

      result++;
      visited[next] = true;
      q.push(next);
    }
  }

  return result;
}
