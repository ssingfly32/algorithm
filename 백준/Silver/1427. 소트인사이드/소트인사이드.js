const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);

for (let i = 0; i < inputs.length; i++) {
    const num = inputs[i];
    let maxNum = num;
    let maxNumIdx = i;
    for (let j = i + 1; j < inputs.length; j++) {
        if (maxNum < inputs[j]) {
            maxNum = inputs[j];
            maxNumIdx = j;
        } 
    }
    
    if (maxNumIdx !== i) {
        [inputs[i], inputs[maxNumIdx]] = [inputs[maxNumIdx], inputs[i]];
    }
    
}

console.log(inputs.join(''));