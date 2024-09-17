const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';
for(let i = 0; i < input; i++) {
    for(let j = 0; j <= i; j++) {
        answer += '*';
    }
    answer += i !== input-1 ? '\n' : '';
}
console.log(answer);