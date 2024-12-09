
const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const testCases = input.slice(0, input.length - 1);
let output = '';
for (const testCase of testCases) {
    const reversedTestCase = testCase.split('').reverse().join('');
    output += testCase === reversedTestCase ? 'yes\n' : 'no\n';
}

console.log(output);