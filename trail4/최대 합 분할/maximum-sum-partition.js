const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
arr.unshift(0);

function solve(n, arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    const dp = Array.from(Array(n + 1), () => Array(total + 1).fill(-1));

    dp[0][0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= total; j++) {
            if (dp[i - 1][j] !== -1)
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);

            if (j >= arr[i] && dp[i - 1][j - arr[i]] !== -1)
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - arr[i]] + arr[i]);

            if (j + arr[i] <= total && dp[i - 1][j + arr[i]] !== -1)
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j + arr[i]]);

            if (arr[i] > j && arr[i] - j <= total && dp[i - 1][arr[i] - j] !== -1)
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][arr[i] - j] + j);


        }
    }

    return dp[n][0];
}

console.log(solve(n, arr));