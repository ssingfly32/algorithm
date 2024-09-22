const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let A = [];
let B = [];
const [N, M] = input[0].split(' ').map(Number);
const answer = new Array(N).fill(0).map(() => new Array(M));

for (let i = 1; i < input.length; i++) {
    const arr = input[i].split(' ').map(Number);
    i <= (input.length -1) / 2 ? A.push(arr) : B.push(arr);
}

answer.forEach((el, idx) => {
    for (let i = 0; i < M; i++) {  
        el[i] = A[idx][i] + B[idx][i];
    }
    console.log(...answer[idx]);
})
