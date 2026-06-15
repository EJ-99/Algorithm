const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coins = input[1].split(' ').map(Number);

// Please Write your code here.
function solve(n, m, coins) {
    const dp = Array(m + 1).fill(10001);

    dp[0] = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 0; j < n; j++) {
            if (coins[j] > i || i - coins[j] === -1) continue;

            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
    }

    if (dp[m] === 10001) console.log(-1);
    else console.log(dp[m]);
}

solve(n, m, coins);