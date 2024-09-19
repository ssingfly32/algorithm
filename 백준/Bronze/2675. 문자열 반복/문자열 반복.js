const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const caseNum = parseInt(input[0]);
let answer = '';
for (let i = 1; i <= caseNum; i++) {
    const arr = input[i].split(' ');
    const num = parseInt(arr[0]);
    const str = arr[1].trim();
    for(let j = 0; j < str.length; j++) {
        for(let k = 0; k < num; k++) {
            answer += str[j];
        }
    }
    if(i !== caseNum) answer += '\n';
}
console.log(answer);