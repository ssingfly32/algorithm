const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const caseNum = parseInt(input[0]);
const nums = input[1].split(" ").map(Number);
let count = 0;
for (let i = 0; i < caseNum; i++) {
  const arr = Array.from({ length: nums[i] }, (_, i) => i + 1).filter(
    (el) => nums[i] % el === 0
  );
  if (arr.length === 2) count++;
}

console.log(count);