const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const findNum = parseInt(input[2]);
const numArr = input[1].split(' ').map(Number);
const dupCount = numArr.filter(num => num === findNum).length;

console.log(dupCount);