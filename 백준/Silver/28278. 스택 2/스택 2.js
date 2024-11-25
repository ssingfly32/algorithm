const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const stackArr = [];
const outputArr = [];
const testCases = input.slice(1);

for (const testCase of testCases) {
    const [command, num] = testCase.split(' ').map(Number);
    switch (command) {
        case 1:
            stackArr.push(num);
            break;
        case 2:
            outputArr.push(stackArr.length ? stackArr.pop() : -1);
            break;
        case 3:
            outputArr.push(stackArr.length);
            break;
        case 4:
            outputArr.push(stackArr.length ? 0 : 1);
            break;
        case 5:
            outputArr.push(stackArr.length ? stackArr[stackArr.length - 1] : -1);
            break;
    }
}
console.log(outputArr.join('\n'));