const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const TOTAL_STUDENT = 30;
const allStudent = Array.from({length: TOTAL_STUDENT}, (_,i) => i+1);
const answer = allStudent.filter(el =>!(input.some(e=>e===el)));
console.log(`${answer[0]}\n${answer[1]}`);