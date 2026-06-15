const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
function solve(n, m, arr) {
    const dp = Array(m + 1).fill(n + 1);

    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        for (let j = m; j >= 1; j--) {
            if (j < arr[i]) continue;
            if (dp[j - arr[i]] === n + 1) continue;

            dp[j] = Math.min(dp[j], dp[j - arr[i]] + 1)
        }
    }

    if (dp[m] === n + 1) return -1;
    return dp[m]
}

console.log(solve(n, m, arr));