const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const testCases = input.slice(1);
let answer = '';
for (const testCase of testCases) {
    const oxArr = testCase.split('');
    let result = 0;
    let o = 0;
    for (let i = 0; i < oxArr.length; i++) {
        oxArr[i] === 'X' ? o = 0 : o++;
        result += o;
    }
    answer += result +'\n';
}

console.log(answer);