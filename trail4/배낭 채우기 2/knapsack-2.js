const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const jewels = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.
function solve(n, m, jewels) {
    const dp = Array(m + 1).fill(0);

    for (let i = 1; i <= m; i++) {
        for (let j = 0; j < n; j++) {
            const [w, v] = jewels[j];
            if (i < w) continue;

            dp[i] = Math.max(dp[i], v + dp[i - w]);
        }
    }

    return dp[m];
}

console.log(solve(n, m, jewels));