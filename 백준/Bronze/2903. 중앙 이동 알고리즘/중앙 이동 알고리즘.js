const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const caseNum = parseInt(input);

const answer = (2 ** caseNum + 1) ** 2;
console.log(answer);