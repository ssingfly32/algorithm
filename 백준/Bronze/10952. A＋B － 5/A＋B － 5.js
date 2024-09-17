const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';
for(let i = 0; i < input.length-1; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    answer += `${A + B}`;
    answer += i !== input.length -2 ? '\n' : '';
}
console.log(answer);