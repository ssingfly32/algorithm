const input = BigInt(require('fs').readFileSync("/dev/stdin").toString().trim());

const answer = ((input - 2n) * (input - 1n) * input) / 6n;

console.log(`${answer}\n3`);