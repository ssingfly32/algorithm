
const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
const result = input[0] - input[1];
console.log(result < 0 ? result * -1 : result);