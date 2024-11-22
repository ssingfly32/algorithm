const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

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

const checkPrimeForRange = (firstVal, lastVal) => {
    let count = 0;
    for (let i = firstVal; i <= lastVal; i++) {
        if (checkPrime(i)) count++;
    }
    return count;
}

let answer = '';
for (const testCase of input) {
    if (testCase) {
        const count = checkPrimeForRange(testCase + 1, testCase * 2);
        answer += count + '\n';
    }
}
console.log(answer);