const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);
const A = input[0] * -1;
const B = input[1] * -1;

if(A< 0 && B < 0) {
    console.log(1);
} else if(A > 0 && B < 0) {
    console.log(2);
} else if(A > 0 && B > 0) {
    console.log(3);
} else {
    console.log(4);
} 