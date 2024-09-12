
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const num = (input % 4 === 0 && input % 100 !== 0 || input % 4 === 0 && input % 400 === 0) ? 1 : 0;
console.log(num);