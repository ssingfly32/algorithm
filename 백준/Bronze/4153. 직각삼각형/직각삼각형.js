const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const testCases = input.slice(0, input.length - 1);
const output = [];
for (const testCase of testCases) {
    const arr = testCase.split(' ').map(Number);
    const maxNum = Math.max(...arr);
    const addRest = arr.filter(v => v !== maxNum).reduce((pre, cur) => pre + (cur ** 2), 0);
    output.push(maxNum ** 2 === addRest ? 'right' : 'wrong'); 
}

console.log(output.join('\n'));