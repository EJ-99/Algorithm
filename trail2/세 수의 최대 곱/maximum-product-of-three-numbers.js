const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please write your code here.
function solution(n, arr) {
    arr.sort((a, b) => b - a);

    const candidate1 = arr[0] * arr[1] * arr[2];
    const candidate2 = arr[n - 1] * arr[n - 2] * arr[0];

    return Math.max(candidate1, candidate2);
}

console.log(solution(n, arr));