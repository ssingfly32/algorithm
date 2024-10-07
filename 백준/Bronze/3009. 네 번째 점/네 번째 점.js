const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const xCoordinates = Array(4).fill(0);
const yCoordinates = Array(4).fill(0);

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ").map(Number);
  xCoordinates[i] = input[i][0];
  yCoordinates[i] = input[i][1];
}

const findUniqueVal = (arr) => {
  const seen = new Set();
  let duplicate = 0;

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      duplicate = arr[i];
      break;
    } else {
      seen.add(arr[i]);
    }
  }
  const result = arr.find((el) => el !== duplicate);

  return result;
};

// 각 배열에서 중복인 수 찾아 중복이 아닌 수를 배열의 마지막에 할당
xCoordinates[3] = findUniqueVal(xCoordinates);
yCoordinates[3] = findUniqueVal(yCoordinates);

console.log(`${xCoordinates[3]} ${yCoordinates[3]}`);