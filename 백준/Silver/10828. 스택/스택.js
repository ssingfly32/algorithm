const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const testCases = input.slice(1);
const output = [];
const stack = [];
for (const testCase of testCases) {
    const [command, num] = testCase.split(' ');
    switch (command) {
        case 'push':
            stack.push(num);
            break;
        case 'pop':
            output.push(stack.length ? stack.pop() : -1);
            break;
        case 'size':
            output.push(stack.length);
            break;
        case 'empty':
            output.push(stack.length ? 0 : 1);
            break;
        case 'top':
            output.push(stack.length ? stack[stack.length - 1] : -1);
            break;
    }
}
console.log(output.join('\n'));