const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const aArr = input[1].split(' ').map(Number);
const mArr = input[3].split(' ').map(Number);
let result = '';
const aSet = new Set(aArr);
for (const target of mArr) {
    result += aSet.has(target) ? '1\n' : '0\n';
}

console.log(result);
