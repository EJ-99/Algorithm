const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const dp = Array(n).fill(0).map(_ => Array(0).fill(0));
const dr = [-1, 1, 0, 0];
const dc = [0, 0, 1, -1];

function move(row, col, current_count){
    if(dp[row][col]) return dp[row][col];

    let max_count = 0;

    for(let i=0; i<4; i++){
        const nr = row + dr[i];
        const nc = col + dc[i];

        if(nr < 0 || nr >= n || nc < 0 || nc >=n || grid[nr][nc] <= grid[row][col]) continue;

        max_count = Math.max(max_count, current_count + move(nr, nc, current_count));   
    }

    dp[row][col] = max_count + 1;
    return max_count + 1;
}

let result = 1;

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(dp[i][j]) continue;

        result = Math.max(result, move(i, j, 0));
    }
}

console.log(result);