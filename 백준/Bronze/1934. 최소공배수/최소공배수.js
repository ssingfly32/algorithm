const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const caseNum = Number(input[0]);
let answer = '';
for (let i = 1; i <= caseNum; i++) {
   const [a, b] = input[i].split(' ').map(Number);
   const maxNum = a > b ? a : b; 
   const minNum = a < b ? a : b;
   let count = 1;
   while (maxNum * count % minNum) {
    count++;
   }
    answer += `${maxNum * count}\n`;   
}
console.log(answer);