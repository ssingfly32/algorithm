const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = Array.from({length : 9}, () => new Array(9));
let maxVal = 0;
const maxValIdx = [];
let answer = '';
for (let i = 0; i < 9; i++) {
    let temp = input[i].split(' ').map(Number);
    temp.forEach((el,idx) => arr[idx][i] = el);
    temp.push(maxVal);
    maxVal = Math.max(...temp);
}
for (let i = 0; i < 9; i++) {
    let tempMaxValIdx = arr[i].indexOf(maxVal);
    if(tempMaxValIdx > -1) {
        maxValIdx[0] = tempMaxValIdx+1;
        maxValIdx[1] = i+1;
        answer += `${maxVal}\n${maxValIdx[0]} ${maxValIdx[1]}`;
        break;
    } 
}
console.log(answer);