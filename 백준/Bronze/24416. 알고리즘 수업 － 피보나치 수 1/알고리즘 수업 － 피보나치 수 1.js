const input = Number(require('fs').readFileSync('dev/stdin').toString().trim());

let recursiveCalls = 0;
let dpCalls = 0;

// 재귀호출
function fib(n) {
    if (n === 1 || n === 2) {
        recursiveCalls++;
        return 1;
    }
    return (fib(n - 1) + fib(n - 2));
}

// 동적 프로그래밍
function fibonacci(n) {
    const dp = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
        dpCalls++;
    }
    return dp[n];
}

fib(input);
fibonacci(input);

console.log(recursiveCalls, dpCalls);