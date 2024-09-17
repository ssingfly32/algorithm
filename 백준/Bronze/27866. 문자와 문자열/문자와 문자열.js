const [str, idx] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(str[idx-1]);