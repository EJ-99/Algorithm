const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const jewels = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.
function solve(n, m, jewels) {
    let result = 0;
    const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const [w, v] = jewels[i - 1];
        for (let j = 0; j <= m; j++) {
            if (j >= w) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - w] + v);
            }
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j])
        }
    }

    for (let i = 1; i <= n; i++) {
        result = Math.max(result, dp[i][m]);
    }

    return result;
}

console.log(solve(n, m, jewels));