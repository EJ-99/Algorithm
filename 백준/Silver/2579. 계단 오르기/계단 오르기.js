const fs = require('fs');

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const n = input[0];
const arr = input.slice(1);
const dp = Array(n + 1).fill(0);

dp[0] = 0;
dp[1] = arr[0];
dp[2] = arr[0] + arr[1];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(dp[i - 2], dp[i - 3] + arr[i - 2]) + arr[i - 1];
}

console.log(dp[n]);
