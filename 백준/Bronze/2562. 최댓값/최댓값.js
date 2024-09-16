const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const maxNum = Math.max(...input);
const maxNumIdx = input.indexOf(maxNum) + 1;
console.log(`${maxNum}\n${maxNumIdx}`);
