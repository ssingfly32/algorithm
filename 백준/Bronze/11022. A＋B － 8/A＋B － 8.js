const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const count = parseInt(input[0]);
let answer = '';
for(let i = 1; i <= count; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    answer += `Case #${i}: ${A} + ${B} = ${A + B}`;
    answer += i !== count ? '\n' : '';
}
console.log(answer);