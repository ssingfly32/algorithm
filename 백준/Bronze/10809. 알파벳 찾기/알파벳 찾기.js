const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const AL_COUNT = 26;
const strArr = Array.from({ length : input.length}, (_,idx) => input[idx]);
const alArr = Array.from({ length : AL_COUNT}, (_, idx) => String.fromCharCode(idx + 97));
alArr.forEach((el, idx) => alArr[idx] = strArr.indexOf(el));
console.log(...alArr);