const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const cardNums = input[1].split(' ').map(Number);
const targetNums = input[3].split(' ').map(Number);
const cardMap = new Map();
cardNums.forEach(v => cardMap.set(v, 1));
const answer = targetNums.map(v => cardMap.get(v) ? cardMap.get(v) : 0);
console.log(answer.join(' '));