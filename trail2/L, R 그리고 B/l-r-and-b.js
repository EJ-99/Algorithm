const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const board = input.slice(0, 10);

// Please Write your code here.
const N = 10;

function bfs(cr, cc, board) {
    const dr = [1, -1, 0, 0];
    const dc = [0, 0, 1, -1];
    const visited = Array.from(Array(N), () => Array(N).fill(false));

    const q = [];
    let idx = 0;

    q.push([cr, cc, 0]);

    while (q.length) {
        const [cr, cc, move] = q[idx++];

        for (let i = 0; i < 4; i++) {
            const nr = cr + dr[i];
            const nc = cc + dc[i];

            if (nr < 0 || nc < 0 || nr >= N || nc >= N || visited[nr][nc] || board[nr][nc] === "R") continue;
            if (board[nr][nc] === 'B') return move;

            q.push([nr, nc, move + 1]);
            visited[nr][nc] = true;
        }
    }

    return -1;
}

function solution(board) {
    let cr, cc;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === "L") {
                cr = i;
                cc = j;
                break;
            }
        }

        if (cr && cc) break;
    }

    return bfs(cr, cc, board);
}

console.log(solution(board));