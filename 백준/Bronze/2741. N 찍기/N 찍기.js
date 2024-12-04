const input = require('fs').readFileSync('dev/stdin').toString().trim();
const n = Number(input);
const arr = Array.from({ length: n }, (_, idx) => idx + 1); 
console.log(arr.join('\n'));