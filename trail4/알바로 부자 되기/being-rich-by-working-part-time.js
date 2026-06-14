const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const jobs = [];
for (let i = 1; i <= n; i++) {
    jobs.push(input[i].split(' ').map(Number));
}

// Please Write your code here.
function solve(n, jobs) {
    let ans = 0;
    // dp[i]: i번째 알바를 할 때 최대 수입
    const dp = Array(n).fill(0);

    dp[0] = jobs[0][2];

    for (let i = 1; i < n; i++) {
        const [si, ei, pi] = jobs[i];
        dp[i] = pi;

        for (let j = 0; j < i; j++) {
            const [sj, ej, pj] = jobs[j];

            if (ej >= si) continue;

            dp[i] = Math.max(dp[i], dp[j] + pi);
        }
    }

    for (let i = 0; i < n; i++) ans = Math.max(dp[i], ans);

    console.log(ans);
}

solve(n, jobs);