const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';

for (let i = 0; i < input.length-1; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    let relationship = 'neither';
    if(A < B) {
        if(B % A === 0) relationship = 'factor';
    } else {
        if (A % B === 0) relationship = 'multiple';
    }

    answer += relationship;
    if (i !== input.length -2) answer += '\n';
}

console.log(answer);
