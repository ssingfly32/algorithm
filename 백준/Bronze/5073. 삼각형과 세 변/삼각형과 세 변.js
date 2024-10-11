const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = "";
for (let i = 0; i < input.length - 1; i++) {
  const sides = input[i].split(" ").map(Number);
  const maxSide = Math.max(...sides);
  const maxIdx = sides.indexOf(maxSide);
  const otherSidesSum = sides
    .filter((_, idx) => idx !== maxIdx)
    .reduce((pre, cur) => pre + cur, 0);

  let result = "Scalene";

  if (maxSide < otherSidesSum) {
    const sideSet = new Set(sides);
    
    if (sideSet.size === 1) {
      result = "Equilateral";
    } else if (sideSet.size === 2) {
      result = "Isosceles";
    }
  } else {
    result = "Invalid";
  }
  answer += result + "\n";
}

console.log(answer);