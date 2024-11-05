const inputArr = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);

const sortedInput = inputArr.sort((a, b) => b - a);

console.log(sortedInput.join(''));