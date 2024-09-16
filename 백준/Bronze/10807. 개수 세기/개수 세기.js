const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = parseInt(input[0]);
const findNum = parseInt(input[2]);
const numArr = input[1].split(' ').map(Number);
let dupCount = 0;
numArr.forEach(el=> {
    el === findNum ? dupCount++ : '';
})
console.log(dupCount);