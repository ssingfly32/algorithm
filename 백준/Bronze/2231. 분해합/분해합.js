const input = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
let answer = [];
for (i = 0; i < input; i++) {
    const numArr= i.toString().split('').map(Number);
    const result = i + numArr.reduce((pre, cur) => pre + cur, 0);
    if(result === input) answer.push(i);
}

answer[0] ? console.log(answer[0]) : console.log(0);