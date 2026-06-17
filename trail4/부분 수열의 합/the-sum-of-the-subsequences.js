const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
function solve(n, m, arr) {
    const dp = Array(m + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < n; i++) {
        for (let j = m; j >= 1; j--) {
            if (j - arr[i] < 0) continue;
            if (dp[j - arr[i]]) {
                dp[j] = true;
            }
        }
    }

    return dp[m] ? 'Yes' : 'No';
}

console.log(solve(n, m, arr));