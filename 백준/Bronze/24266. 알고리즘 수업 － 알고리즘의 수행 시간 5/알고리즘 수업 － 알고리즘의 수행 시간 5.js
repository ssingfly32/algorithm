const input = parseInt(require('fs').readFileSync('dev/stdin').toString().trim());
const num = BigInt(input);

const count = num ** 3n;
console.log(`${count}\n3`);
