const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const sortedInput = input.slice(1).map(el => el.split(' ').map(Number)).sort((a, b) => a[1] - b[1] || a[0] - b[0]);
let prevEnd = 0;
let answer = 0;
sortedInput.forEach(([start, end]) => {
    if (prevEnd <= start) {
        answer++;
        prevEnd = end;
    }
})

console.log(answer);
