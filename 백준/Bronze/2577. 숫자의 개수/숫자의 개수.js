const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
const [a, b, c] = input;
const result = `${a * b * c}`;
const resultArr = result.split('').map(Number);
const targetNums = Array(10).fill(0);
resultArr.forEach(v => targetNums[v] += 1);
console.log(targetNums.join('\n')); 