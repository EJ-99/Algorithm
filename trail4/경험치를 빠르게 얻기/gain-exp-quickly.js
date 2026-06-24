const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const quests = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.
// dp[i] 합이 i일 때, 최소 소요 시간

function solve(n, m, quests) {
    const total = quests.reduce((acc, cur) => acc + cur[0], 0);

    if (total < m) return -1;

    const dp = Array(total + 1).fill(100 * 100);
    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        const [e, t] = quests[i];
        for (let j = total; j >= 1; j--) {
            if (j < e) continue;
            dp[j] = Math.min(dp[j], dp[j - e] + t);
        }
    }

    let ans = 100 * 100;
    for (let i = m; i <= total; i++) {
        ans = Math.min(ans, dp[i]);
    }
    return ans;
}

console.log(solve(n, m, quests));