const input = require('fs').readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
const seen = new Set();
let dup = 0;
let reward = 0;

for(const el of input) {
       if(seen.has(el)) {
         dup = el;
     }
     seen.add(el);
}

if(dup) {
    let dupCount = 0;
    input.forEach((val) => {
        if(val === dup) {
            dupCount++;
        }
    })
    dupCount === 3 ? reward = 10000 + dup * 1000 : reward = 1000 + dup * 100;
} else {
    // 중복되는 수가 없을 때
    const maxNum = Math.max(...input);
    reward = maxNum * 100;
}

console.log(reward);