const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const strs = Array(2).fill(0);
for (let i = 0; i < 2; i++) {
    let tempStr = '';
    for (let j = 2; j >= 0; j--) {
        tempStr += input[i][j];
    }
    strs[i] = parseInt(tempStr);
}

console.log(Math.max(...strs));