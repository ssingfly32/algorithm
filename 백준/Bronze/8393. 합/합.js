const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = parseInt(input);
let sol = 0;
for(i = 1; i <= num; i++) {
  sol+=i;
}
console.log(sol);