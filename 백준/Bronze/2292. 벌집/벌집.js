const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

let answer = -1;
let idx = 1;
let arr = [1];
while (answer < 0) {
    if (N === 1) {
        answer = 1;
        break;
    }
    arr.push(idx*6);
    N <= arr.reduce((pre,cur) => pre + cur) ? answer = idx+1 : idx++;
}
console.log(answer);