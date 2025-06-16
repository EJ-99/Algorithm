const fs = require('fs');

const colToNum = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
};

const colToChar = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'F',
  7: 'G',
  8: 'H',
};

function move(dir, pos) {
  let col = pos[0];
  let row = pos[1];

  for (const how of dir.split('')) {
    if (how === 'R') {
      col++;
    } else if (how === 'L') {
      col--;
    } else if (how === 'B') {
      row--;
    } else {
      row++;
    }
  }

  return [col, row];
}

function printPos(pos) {
  const posStr = colToChar[pos[0]] + pos[1];
  console.log(posStr);
}

const input = fs.readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((line) => line.trim());

let [kingInit, stoneInit, n] = input[0].split(' ');
const info = input.slice(1);

let kingPos = kingInit.split('');
let stonePos = stoneInit.split('');

kingPos[0] = colToNum[kingPos[0]];
kingPos[1] = Number(kingPos[1]);
stonePos[0] = colToNum[stonePos[0]];
stonePos[1] = Number(stonePos[1]);

for (const dir of info) {
  const nextKingPos = move(dir, kingPos);

  if (
    nextKingPos[0] < 1 ||
    nextKingPos[1] < 1 ||
    nextKingPos[0] > 8 ||
    nextKingPos[1] > 8
  ) {
    continue;
  }

  if (nextKingPos[1] === stonePos[1] && nextKingPos[0] === stonePos[0]) {
    const nextStonePos = move(dir, stonePos);
    if (
      nextStonePos[0] < 1 ||
      nextStonePos[1] < 1 ||
      nextStonePos[0] > 8 ||
      nextStonePos[1] > 8
    ) {
      continue;
    }

    stonePos = nextStonePos;
  }

  kingPos = nextKingPos;
}

printPos(kingPos);
printPos(stonePos);
