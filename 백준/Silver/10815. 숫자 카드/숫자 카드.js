const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const cardNums = input[1].split(' ').map(Number);
const targetNums = input[3].split(' ').map(Number);
const cardSet = new Set(cardNums);
const answer = targetNums.map(v => cardSet.has(v) ? 1 : 0);
console.log(answer.join(' '));