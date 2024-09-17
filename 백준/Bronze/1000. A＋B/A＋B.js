const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const solution = input[0] + input[1];

console.log(solution);