const [firstVal, lastVal] = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
// n이 소수인지 판별하는 함수
const checkPrime = (n) => {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    const sqrtN = Math.sqrt(n);
    for (let i = 3; i <= sqrtN; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

let answer = '';
for (let i = firstVal; i <= lastVal; i++) {
    if (checkPrime(i)) answer += i + '\n';
}
console.log(answer);