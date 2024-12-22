
const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
console.log(input.reduce((pre, cur) => pre + cur ** 2, 0) % 10);