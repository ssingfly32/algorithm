const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const testCases = input.slice(0, input.length - 1);
const output = [];
function checkVPS(testCase) {
    const stack = [];
    for (let i = 0; i < testCase.length; i++) {
        if (testCase[i] === '(' || testCase[i] === '[') {
            stack.push(testCase[i]);
        }
        if (testCase[i] === ')' || testCase[i] === ']') {
            if (!stack.length) return false;
            const topVal = stack.length ? stack[stack.length - 1] : 0;
            if (testCase[i] === ')') {
                if (topVal !== '(') return false;
                stack.pop();
            }
            if (testCase[i] === ']') {
                if (topVal !== '[') return false;
                stack.pop();
            }
        }
    }
    return !stack.length ? true : false;
}

for (const testCase of testCases) {
    output.push(checkVPS(testCase) ? 'yes' : 'no'); 
}
console.log(output.join('\n'));