const inputs = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
// 의사코드
// if a <= 0 or b <= 0 or c <= 0, then w(a, b, c) returns:
//     1

// if a > 20 or b > 20 or c > 20, then w(a, b, c) returns:
//     w(20, 20, 20)

// if a < b and b < c, then w(a, b, c) returns:
//     w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c)

// otherwise it returns:
//     w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1)

const dp = Array.from({ length: 21 }, () => Array.from( { length: 21 }, () => new Array(21).fill(null)));
function w(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 ||  b > 20 || c > 20) return w(20, 20, 20);
    if (dp[a][b][c] !== null) return dp[a][b][c];
    dp[a][b][c] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1);
    return dp[a][b][c];
}

let result = '';
for (const input of inputs) {
    const [a, b, c] = input.split(' ').map(Number);
    if (a === -1 && b === -1 && c === -1) break;
    result += `w(${a}, ${b}, ${c}) = ${w(a, b, c)}\n`;
}

console.log(result);