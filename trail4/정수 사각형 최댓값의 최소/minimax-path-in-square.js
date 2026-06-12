const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const num = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const INF = 1000000;

function initialize(n, num) {
    const dp = Array(n).fill(0).map(_ => Array(n).fill(INF));

    dp[0][0] = num[0][0];
    for (let i = 1; i < n; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], num[0][i]);
        dp[i][0] = Math.max(dp[i - 1][0], num[i][0]);
    }

    return dp;
}

function solve(n, num) {
    const dp = initialize(n, num);

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(Math.min(dp[i - 1][j], dp[i][j - 1]), num[i][j]);
        }
    }

    console.log(dp[n - 1][n - 1]);
}


solve(n, num);