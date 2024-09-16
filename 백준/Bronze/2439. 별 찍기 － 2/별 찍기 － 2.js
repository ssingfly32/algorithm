const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let answer = '';
for(let i = 1; i <= input; i++) {
    for(let j = 0; j < input; j++) {
        answer +=  j >= input - i ? '*' : ' ';
    }
    answer += i !== input ? '\n' : '';
}
console.log(answer);