const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const inputLen = input.length;
const sortedInput = input.sort((a, b) => a - b);
const middleIndex = 2;
const avg = sortedInput.reduce((pre, cur) => pre + cur, 0) / inputLen;
console.log(`${avg}\n${sortedInput[middleIndex]}`); 