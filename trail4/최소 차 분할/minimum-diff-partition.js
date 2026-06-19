const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
arr.unshift(0);

function solve(n, arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    const dp = Array(total + 1).fill(false);
    dp[0] = true;

    for (const num of arr) {
        for (let j = total; j >= num; j--) {
            if (dp[j - num]) dp[j] = true;
        }
    }

    let minDiff = total;
    for (let j = 0; j <= total; j++) {
        if (dp[j]) {
            minDiff = Math.min(minDiff, Math.abs(total - 2 * j));
        }
    }

    return minDiff;
}

console.log(solve(n, arr));