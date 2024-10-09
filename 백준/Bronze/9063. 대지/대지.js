const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dotNum = parseInt(input[0]);

const xArr = Array(dotNum).fill(0);
const yArr = Array(dotNum).fill(0);

for (let i = 1; i <= dotNum; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  xArr[i - 1] = x;
  yArr[i - 1] = y;
}

const minX = Math.min(...xArr);
const maxX = Math.max(...xArr);
const minY = Math.min(...yArr);
const maxY = Math.max(...yArr);

const answer = (maxX - minX) * (maxY - minY);

console.log(answer);