const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
const testCases = input.slice(1);
const maxCase = Math.max(...testCases);

const isPrime = Array(maxCase + 1).fill(true);
isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님
for (let i = 2; i * i <= maxCase; i++) {
    if (isPrime[i]) {
        for (let j = i * i; j <= maxCase; j += i) {
            isPrime[j] = false;
        }
    }
}

const results = [];
testCases.forEach(testCase => {
    let count = 0;
    for (let i = 2; i <= testCase / 2; i++) { 
        if (isPrime[i] && isPrime[testCase - i]) {
            count++;
        }
    }
    results.push(count);
});

console.log(results.join('\n'));