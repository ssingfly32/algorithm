const inputArr = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);

inputArr.sort((a, b) => b - a);

console.log(inputArr.join(''));