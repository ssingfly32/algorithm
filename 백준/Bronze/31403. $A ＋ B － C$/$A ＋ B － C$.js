const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const numbers = input.map(Number); 
console.log(`${numbers[0] + numbers[1] - numbers[2]}\n${input[0] + input[1] - input[2]}`)