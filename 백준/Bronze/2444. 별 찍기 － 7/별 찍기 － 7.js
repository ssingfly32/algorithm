const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const num = parseInt(input);
let answer ='';
let blank = num-1;
let temp = 1;
for (let i = 0; i < 2 * num -1; i++) {
    answer += ' '.repeat(blank);
    for (let j = 0; j < temp; j++) {
        answer += '*';
    }
    if (i < num-1) {
            temp += 2;
            blank--;
    } else {
            temp -= 2;
            blank++;
    }
    if (i !== 2 * num + 1) answer += '\n';
}
console.log(answer);