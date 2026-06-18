const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const profit = input[1].split(' ').map(Number);

// Please Write your code here.
profit.unshift(0);
function solve(n, profit) {
    const dp = Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) dp[i] = profit[i];

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (j >= i) {
                dp[j] = Math.max(dp[j], dp[j - i] + profit[i]);
            }

        }
    }
    return dp[n];
}


console.log(solve(n, profit));