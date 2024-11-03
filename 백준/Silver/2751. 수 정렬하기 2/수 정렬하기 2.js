const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const [testCase, ...nums] = input;

const answer = nums.sort((a, b) => a - b);

console.log(answer.join('\n'));