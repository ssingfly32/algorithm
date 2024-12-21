const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
let result = 'mixed';
const isAscending = input.every((v, i) => i === 0 || input[i - 1] < v);
const isDescending = input.every((v, i) => i === 0 || input[i - 1] > v);

if (isAscending) {
    result = 'ascending';
} else if (isDescending) {
    result = 'descending';
}

console.log(result);