const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let answer = '';

// 몫이 소수가 나올 때 까지 계속 소인수분해
let quotient = input;
let isDecimal = false;

while (!isDecimal && input > 1) {
    let num = 2;
    for(let i = num; i <= quotient; i++) {
        if (quotient % i === 0) {
            num = i;
            break;
        }   
    }
    quotient = quotient / num;
    answer += num;
    const arr = Array.from({length: quotient - 1}, (_, i) => i + 1);
    isDecimal = !arr.some(el => quotient % el === 0 && el !== 1);
    if (!isDecimal) answer += '\n';
    if(isDecimal && quotient !== 1) answer += '\n' + quotient;

}
console.log(answer);