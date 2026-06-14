const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
function solve(n, arr) {
    let ans = 1;
    const dp = Array(n).fill(0).map(_ => Array(2).fill(1));

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) continue;

            if (arr[i] > arr[j]) {
                dp[i][0] = Math.max(dp[i][0], dp[j][0] + 1);
            }
            else {
                dp[i][1] = Math.max(dp[j][1] + 1, dp[j][0] + 1, dp[i][1]);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, dp[i][0], dp[i][1]);
    }

    console.log(ans);
}


solve(n, arr);