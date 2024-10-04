let input = parseInt(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

let divisor = 2;

while (input !== 1) {
  if (input % divisor === 0) {
    console.log(divisor);
    input /= divisor;
  } else {
    divisor++;
  }
}