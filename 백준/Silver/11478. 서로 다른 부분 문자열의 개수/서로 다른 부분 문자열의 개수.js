const input = require('fs').readFileSync('dev/stdin').toString().trim();

const answer = new Set();
const inputLen = input.length;

for (let i = 0; i < inputLen; i++) {
    for (let j = i + 1; j < inputLen + 1; j++) {
        answer.add(input.slice(i, j));
    }
}

console.log(answer.size);