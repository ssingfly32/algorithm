const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const numbers = input.slice(1, input[0] + 1);
const sortedInput = numbers.sort((a, b) => a - b);

console.log(sortedInput.join('\n'));
