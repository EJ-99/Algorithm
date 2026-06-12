const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

// Please Write your code here.
function solve(n, nums) {
    const dp = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] >= nums[i]) continue;
            dp[i] = Math.max(dp[j] + 1, dp[i]);
        }
    }

    let ans = 1;
    for(let i=0; i<n; i++){
        ans = Math.max(ans, dp[i]);
    }

    console.log(ans);
}


solve(n, nums);