
const input = Number(require('fs').readFileSync('dev/stdin').toString().trim());
function calc(n) {
    if (n <= 1) return 1;
    return n * (calc(n - 1)); 
}

console.log(calc(input));