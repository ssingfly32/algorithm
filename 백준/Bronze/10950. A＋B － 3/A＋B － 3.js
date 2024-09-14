const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const caseNum = parseInt(input[0]);
const nums = input.filter((_,idx)=>idx !== 0);
const arr = Array(caseNum).fill(0);
arr.forEach((_,idx)=> {
  arr[idx] = nums[idx].split(' ').map(Number);  
  arr[idx] = arr[idx][0] + arr[idx][1];
})
console.log(...arr);