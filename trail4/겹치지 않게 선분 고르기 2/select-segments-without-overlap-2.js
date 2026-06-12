const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
function isCrossing(line1, line2) {
    if (line1[0] > line2[1] || line1[1] < line2[0]) return false;

    return true;
}

function solve(n, segments) {
    let answer = 0;
    const dp = Array(n).fill(1);

    segments.sort((l1, l2) => {
        if (l1[0] !== l2[0]) return l1[0] - l2[0];
        return l1[1] - l2[1];
    });

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (isCrossing(segments[i], segments[j])) continue;
            dp[i] = Math.max(dp[j] + 1)
        }
    }

    console.log(dp[n-1]);
}

solve(n, segments);