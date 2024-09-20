const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const caseNum = parseInt(input[0]);
let groupWordCount = 0;
for (let i = 1; i <= caseNum; i++) {
    const str = input[i];
    let isGroupWord = true;
    let appeared = [];

    for (let j = 0; j < str.length; j++) {
        if(appeared.indexOf(str[j]) === -1) {
            appeared.push(str[j]);
        } else {
            if (str[j] !== str[j-1]) {
                isGroupWord = false;
                break;
            }
        }
    }
    if(isGroupWord) groupWordCount++;

}

console.log(groupWordCount);