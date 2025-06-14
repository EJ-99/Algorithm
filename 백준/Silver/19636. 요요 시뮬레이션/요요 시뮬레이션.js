const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((line) => line.trim());

const [W0, I0, T] = input[0].split(' ').map(Number);
const [D, I, A] = input[1].split(' ').map(Number);

let W1 = W0;

W1 = W1 + D * (I - I0 - A);

if (W1 <= 0) console.log('Danger Diet');
else console.log(W1, I0);

let W2 = W0,
  I2 = I0,
  d = D;

while (d-- && W2 > 0 && I2 > 0) {
  const diff = I - A - I2;

  W2 += diff;

  if (Math.abs(diff) > T) {
    I2 += Math.floor(diff / 2);
  }
}

if (W2 <= 0 || I2 <= 0) console.log('Danger Diet');
else {
  const result = I0 > I2 ? 'YOYO' : 'NO';
  console.log(W2, I2, result);
}
