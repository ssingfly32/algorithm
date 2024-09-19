const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const chessPieces = [1, 1, 2, 2, 2, 8];
chessPieces.forEach((el, idx) => {
    input[idx] = el - input[idx];
})
console.log(...input);