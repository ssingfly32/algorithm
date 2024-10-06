const [x, y, w, h] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const leftDistance = x;
const rightDistance = w - x;
const upDistance = h - y;
const downDistance = y;

const minDistance = Math.min(
  leftDistance,
  rightDistance,
  upDistance,
  downDistance
);
console.log(minDistance);