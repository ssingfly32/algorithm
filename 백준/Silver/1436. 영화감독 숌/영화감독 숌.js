const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let target = parseInt(input);
let number = 0;
let matchCount = 0;

while(matchCount < target) {
    number++;
    const strNumber = number.toString();
    if(strNumber.includes(666)) matchCount++;
}

console.log(number);