const input = require('fs').readFileSync('dev/stdin').toString().trim().split('');
const answer = input.map(v => v.toUpperCase() === v ? v.toLowerCase() : v.toUpperCase());
console.log(answer.join(''));