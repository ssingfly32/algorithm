const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const testCases = input.slice(1).map(Number);
const stack = [];
for (const testCase of testCases) {
    if (!testCase) {
        stack.pop();
        continue;
    }
    stack.push(testCase);
}
console.log(stack.reduce((pre, cur) => pre + cur, 0));