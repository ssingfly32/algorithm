const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const caseNum = parseInt(input[0]);
const arr = Array.from({length: 100}, () => new Array(100).fill(0));
for (let i = 1; i <= caseNum; i++) {
    const [x, y] = input[i].split(' ').map(Number);

    for (let row = x; row < x + 10; row ++) {
        for (let col = y; col < y + 10; col++) {
            arr[row][col] = 1;
        }
    }
}

let answer = 0;
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (arr[i][j] === 1) {
            answer++;
        }
    }
}
console.log(answer);