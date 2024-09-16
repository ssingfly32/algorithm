const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const TARGET = 42;
const remainders = Array.from({ length : 10 }, (el, i) => input[i] % TARGET);
const answer = remainders.filter((el, i) => !(remainders.some((e, idx) => e === el && idx > i))).length;
console.log(answer);