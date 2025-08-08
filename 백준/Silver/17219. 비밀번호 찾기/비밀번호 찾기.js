const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, _] = input[0].split(' ').map(Number);

const passwordInfo = input
  .slice(1, n + 1)
  .map((line) => line.trim().split(' '));

const siteList = input.slice(n + 1).map((line) => line.trim());

const siteToPassword = new Map();
for (const [site, password] of passwordInfo) {
  siteToPassword.set(site, password);
}

const answer = [];
for (const site of siteList) {
  answer.push(siteToPassword.get(site));
}

console.log(answer.join('\n'));
