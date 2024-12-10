const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const gcdResult = gcd(input[0], input[1]);
const lcm = (a, b) => a * b / gcdResult;
console.log(`${gcdResult}\n${lcm(input[0], input[1])}`);