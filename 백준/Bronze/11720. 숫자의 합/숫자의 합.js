const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = [];
for (let i = 0; i < input[1].length; i++) {
    arr.push(parseInt(input[1][i]));
}
console.log(arr.reduce((acc, cur) => acc + cur));