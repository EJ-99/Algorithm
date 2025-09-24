const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);
const MOD = 10007;
const dp = new Array(n + 1).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = ((dp[i - 2] % MOD) + (dp[i - 1] % MOD)) % MOD;
}

console.log(dp[n]);
