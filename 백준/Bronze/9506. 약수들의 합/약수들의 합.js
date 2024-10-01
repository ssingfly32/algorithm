const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = "";

for (let i = 0; i < input.length - 1; i++) {
  const arr = Array.from({ length: input[i] - 1 }, (_, i) => i + 1).filter(
    (el) => input[i] % el === 0
  );
  const factorsSum = arr.reduce((pre, cur) => pre + cur, 0);
  if (input[i] === factorsSum) {
    let sumStr = arr.join(" + ");
    answer += `${input[i]} = ${sumStr}`;
  } else {
    answer += `${input[i]} is NOT perfect.`;
  }
  answer += "\n";
}
console.log(answer);