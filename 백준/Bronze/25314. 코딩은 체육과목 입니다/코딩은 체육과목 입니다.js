const input = require('fs').readFileSync('dev/stdin').toString().trim();
const num = parseInt(input);
let strStartNum = 3;
let sol = 'int'; // 추가됐을 때 문자열 길이 8, 13, 18... 
for(let i = 0; i < num / 4; i++) {
    strStartNum += 5;
}
console.log(sol.padStart(strStartNum,'long '));
