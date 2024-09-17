const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const caseNum = parseInt(input[0]);
let answer = '';
for(let i = 1; i <= caseNum; i++) {
    let strLength = input[i].trim().length;
    answer += strLength > 1 ? `${input[i][0]}${input[i][strLength-1]}` : `${input[i][0]}${input[i][0]}`;
    if (i !== caseNum) answer += '\n';
}
console.log(answer);