const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

function solve(n, num) {
    const total = num.reduce((acc, cur) => acc + cur, 0);

    if (total % 2 !== 0) return 'No';

    const sum = total / 2;
    const dp = Array(sum + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < n; i++) {
        for (let j = sum; j >= 1; j--) {
            if (j < num[i]) continue;
            if (dp[j - num[i]]) dp[j] = true;
        }
    }

    return dp[sum] ? 'Yes' : 'No';
}

console.log(solve(n, arr));