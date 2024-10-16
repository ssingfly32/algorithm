const input = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

console.log((input * (input-1)) / 2);
console.log(2);