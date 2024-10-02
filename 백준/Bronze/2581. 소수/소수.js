const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = "-1";
let arr = Array.from({ length: input[1] + 1 }, (_, i) => i);

arr[0] = 0;
arr[1] = 0;

for (let i = 2; i * i <= input[1]; i++) {

  if (arr[i]) {
    for (let j = i * i; j <= input[1]; j += i) {
  
      arr[j] = 0;
    }
  }
}
const decimal = arr.filter((el) => el && el >= input[0]);
if (decimal.length > 0) {
  const decimalSum = decimal.reduce((pre, cur) => pre + cur, 0);
  const minDecimal = Math.min(...decimal);

  answer = decimalSum + "\n";
  answer += minDecimal;
}
console.log(answer);