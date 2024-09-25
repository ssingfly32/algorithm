// 이전 제출 리팩토링
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

let count = 1;
let range = 1;

while (range < N) {
    range += 6 * count;
    count++;
}
console.log(count);