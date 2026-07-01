const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const changes = input.slice(1).map(e => e.split(" "));

// Please Write your code here.
function calcFirst(score) {
    const scoreArr = Object.entries(score);
    scoreArr.sort((a, b) => b[1] - a[1]);
    return scoreArr.filter(e => e[1] === scoreArr[0][1]).map(e => e[0]).sort();
}

function solution(changes) {
    const score = {
        A: 0,
        B: 0,
        C: 0
    };

    let board = ['A', 'B', 'C'];
    let result = 0;

    for (const [c, s] of changes) {
        score[c] += Number(s);
        const newBoard = calcFirst(score);

        if (board.length === newBoard.length && board.every((val, idx) => val === newBoard[idx])) continue;

        result++;
        board = [...newBoard];
    }

    return result;
}

console.log(solution(changes));
