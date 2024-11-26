const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const testCases = input.slice(1);
const output = [];

function checkVPS(testCase) {
    const stack = [];
    for (let i = 0; i < testCase.length; i++) {
        if (testCase[i] === '(') {
            stack.push(testCase[i]);
        }
        if (testCase[i] === ')') {
            if (!stack.length) return false;
            if (stack.length && stack[stack.length - 1] === '(') {
                stack.pop();
            }
        }
    }
    return !stack.length ? true : false;
}

for (const testCase of testCases) {
    output.push(checkVPS(testCase) ? 'YES' : 'NO'); 
}
console.log(output.join('\n'));