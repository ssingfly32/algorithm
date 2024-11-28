const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 
const cases = input[1].split(' ').map(Number);
const stack = [];

let count = 1;
for (const testCase of cases) {
    if (testCase === count) {
        count++;
    } else {
        stack.push(testCase);
    }

    while (stack.length > 0 && stack[stack.length - 1] === count) {
        stack.pop();
        count++;
    }
}

console.log(stack.length === 0 ? 'Nice' : 'Sad');