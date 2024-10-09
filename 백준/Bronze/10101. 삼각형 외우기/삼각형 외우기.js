
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = "Error";
const findTypeOfTriangle = () => {
  if (input.reduce((pre, cur) => pre + cur, 0) === 180) {
    const numSet = new Set(input);
    if (numSet.size === 1) {
      answer = "Equilateral";
    } else if (numSet.size === 2) {
      answer = "Isosceles";
    } else {
      answer = "Scalene";
    }
  }
  return answer;
};

findTypeOfTriangle();

console.log(answer);