const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array.from({ length: input[0] }, (_, i) => i + 1);
const factors = arr.filter((el) => input[0] % el === 0);
const answer = factors.length < input[1] ? 0 : factors[input[1] - 1];
console.log(answer);