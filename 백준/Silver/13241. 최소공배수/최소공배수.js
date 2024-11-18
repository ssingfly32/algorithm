const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcm = (a, b) => a * b / gcd(a, b);

console.log(lcm(input[0], input[1]));