const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const testCases = input.slice(1);

let count = 0;
// 1 또는 0을 리턴하거나 재귀함수 호출
function recursion(target, fIdx, bIdx) {
    count++;
    if (fIdx >= bIdx) return 1;
    if (target[fIdx] !== target[bIdx]) return 0;
    return recursion(target, fIdx + 1, bIdx - 1);
}

let answer = '';
// 반환값과 함수의 호출 횟수 출력
for (const target of testCases) {
    count = 0;
    const result = recursion(target, 0, target.length - 1);
    answer += `${result} ${count}\n`;
}

console.log(answer);