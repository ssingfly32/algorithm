const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const B = parseInt(input[1]);
console.log(parseInt(input[0], B));