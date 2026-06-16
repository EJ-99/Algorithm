const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please write your code here.
// dp[i]: i를 합으로 나타내는 방법의 수
const MOD = 10007;

function solve(n) {
    const nums = [1, 2, 5];
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > i) continue;
            dp[i] = (dp[i] + dp[i - nums[j]]) % MOD;
        }
    }

    return dp[n];
}

console.log(solve(n));
