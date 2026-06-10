const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const INF = 101;

// 최솟값을 고정 후, 최댓값 정하기(최대 중 최소)
function findMax() {
    const dp = Array(n).fill(0).map(_ => Array(n).fill(INF));

    dp[0][0] = grid[0][0];
    for (let i = 1; i < n; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], grid[0][i]);
        dp[i][0] = Math.max(dp[i - 1][0], grid[i][0]);
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(Math.min(dp[i - 1][j], dp[i][j - 1]), grid[i][j]);
        }
    }


    return dp[n - 1][n - 1];
}

let answer = INF;

for (let min = 1; min <= 100; min++) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] < min) grid[i][j] = INF;
        }
    }

    const max = findMax();
    if (max === INF) continue;
    answer = Math.min(answer, max - min);
}

console.log(answer);