const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

const N = parseInt(input);

console.log((N + N) * 2);