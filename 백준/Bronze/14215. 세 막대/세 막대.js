const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 제일 큰 막대를 찾고 큰 막대를 제외한 나머지 막대들을 더한 길이 보다 큰 막대의 길이가 작도록 줄인다.

const maxSide = Math.max(...input);
const maxSideIdx = input.indexOf(maxSide);
const otherSideSum = input
  .filter((_, idx) => idx !== maxSideIdx)
  .reduce((pre, cur) => pre + cur, 0);
if (otherSideSum <= maxSide) {
  input[maxSideIdx] = otherSideSum - 1;
}

const answer = otherSideSum + input[maxSideIdx];

console.log(answer);