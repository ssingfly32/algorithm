const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input[1].split(' ').map(Number);
const [numCase, target] = input[0].split(' ').map(Number);
let answer = 0;
for (let i = 0; i < numCase - 2; i++) {
    for (let j = i + 1; j < numCase - 1; j++) {
        for(let k = j + 1; k < numCase; k++) {
            const result = numbers[i] + numbers[j] + numbers[k];
            if (result <= target && result > answer) answer = result;            
        }
    }
}

console.log(answer);