const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';
input.forEach((el, idx) => {
    answer += el;
    if(idx !== input.length-1) answer += '\n';
})
console.log(answer);