const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const caseNum = input[0];  
const arr = [0.25, 0.10, 0.05, 0.01];
let answer = '';

for (let i = 1; i <= caseNum; i++) {
    let money = input[i] * 0.01;
    const answerArr = [];  
    arr.forEach((el) => {
        let quot = Math.floor(money / el); 
        answerArr.push(quot);  
        money = parseFloat((money - el * quot).toFixed(2));
    });
    answer += answerArr.join(' ');  
    if (i !== caseNum) answer += '\n'; 
}
console.log(answer); 