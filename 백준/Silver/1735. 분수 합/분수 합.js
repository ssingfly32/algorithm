const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const testCases = input.map(line => line.split(' ').map(Number));
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);
const denominator = lcm(testCases[0][1], testCases[1][1])
const numerator = testCases[0][0] * (denominator / testCases[0][1]) + testCases[1][0] * (denominator / testCases[1][1]);
const answer = [numerator, denominator];
const gcdForSimplify = gcd(numerator, denominator);
console.log(answer.map(v => v / gcdForSimplify).join(' '));