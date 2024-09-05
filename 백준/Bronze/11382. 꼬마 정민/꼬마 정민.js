const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const [A, B, C] = input;
const solution = A + B + C;
console.log(solution);