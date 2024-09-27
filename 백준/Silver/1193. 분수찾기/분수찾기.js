const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const X = parseInt(input);

let answer = '';
let N = 0;
let num = 1;

while (N < X) {
    let otherVal = num+1;
    for (let i = 1; i <= num; i++) {
        otherVal--;
        N++;
        if(N === X) answer = num % 2 !== 0 ? `${otherVal}/${i}` : `${i}/${otherVal}`;
    }
    num++;
}
console.log(answer);