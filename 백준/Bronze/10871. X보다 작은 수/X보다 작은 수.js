const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [ea, target] = input[0].split(' ').map(Number);
const numArr = input[1].split(' ').map(Number);
const answer = numArr.filter(num => num < target);

console.log(...answer);