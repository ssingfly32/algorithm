const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = 0;
const arr = ['','ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
for (let i = 0; i < input.length; i++) {
    const num = arr.findIndex((el) => el.indexOf(input[i]) > -1); 
    answer += num+2;
}
console.log(answer);