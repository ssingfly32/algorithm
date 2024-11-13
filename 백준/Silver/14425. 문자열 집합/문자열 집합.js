const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const s = input.slice(1, n + 1);
const targetStrs = input.slice(n + 1, n + m + 1);
const sSet = new Set(s);
let answer = 0;
targetStrs.forEach(v => sSet.has(v) ? answer++ : '');
console.log(answer);