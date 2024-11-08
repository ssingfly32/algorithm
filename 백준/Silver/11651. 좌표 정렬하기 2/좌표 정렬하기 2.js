const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const [caseNum, ...coordinates] = input;

const twoDimesionalArr = coordinates.map(v => v.split(' ').map(Number));
const sortedArr = twoDimesionalArr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let answer = '';
for (let i = 0; i < caseNum; i++) {
    answer += `${sortedArr[i].join(' ')}\n`;
}

console.log(answer);