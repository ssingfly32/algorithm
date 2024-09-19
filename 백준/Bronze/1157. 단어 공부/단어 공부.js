const input = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase();
const setArr = [...new Set(input)];
const strs = [...input];
const arr = Array(setArr.length).fill(0);
setArr.forEach((el,idx) => {
    for (const str of strs) {
        if (str === el) arr[idx]++;
    }
})
const maxNum = Math.max(...arr);
const strIdx = arr.indexOf(maxNum);
const isDup = arr.some((el,idx) => el === maxNum && idx !== strIdx);
const answer = isDup ? '?' : setArr[strIdx];
console.log(answer);