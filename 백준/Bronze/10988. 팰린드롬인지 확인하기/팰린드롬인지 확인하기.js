const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let crossStr = '';
for(let i = input.length-1; i >= 0; i--) {
    crossStr += input[i];
}
const answer = crossStr === input ? 1 : 0;
console.log(answer);