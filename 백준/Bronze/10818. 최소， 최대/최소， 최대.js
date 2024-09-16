const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numArr = input[1].split(' ').map(Number);
const minSol = Math.min(...numArr);
const maxSol = Math.max(...numArr);

console.log(`${minSol} ${maxSol}`);