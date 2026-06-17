const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coin = input[1].split(' ').map(Number);

// Please write your code here.
// dp[i]: i원을 거슬러주기 위한 가능한 최대 동전의 수

function solve(n, m, coin) {
    const dp = Array(m + 1).fill(-1);
    dp[0] = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 0; j < n; j++) {
            if (i < coin[j]) continue;
            if (dp[i - coin[j]] !== -1) {
                dp[i] = Math.max(dp[i], dp[i - coin[j]] + 1);
            }
        }
    }

    return dp[m];
}

console.log(solve(n, m, coin));