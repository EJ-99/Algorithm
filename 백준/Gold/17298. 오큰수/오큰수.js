const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const st = [];
const result = new Array(n).fill(-1);

st.push(arr[n - 1]);
for (let i = n - 2; i >= 0; i--) {
  while (st.length > 0 && st[st.length - 1] <= arr[i]) {
    st.pop();
  }

  result[i] = st.length ? st[st.length - 1] : -1;
  st.push(arr[i]);
}

console.log(result.join(' '));
