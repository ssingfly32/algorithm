const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const cases = Number(input[0]);
const p = input[1].split(' ').map((v, idx) => [idx + 1, Number(v)]);
p.sort((a, b) => a[1] - b[1]);
const result = [];

for (let i = 0; i < cases; i++) {
    result.push(!result.length ? p[i][1] : result[i - 1] + p[i][1]);
}
console.log(result.reduce((pre, cur) => pre + cur, 0));