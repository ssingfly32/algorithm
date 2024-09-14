const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const [A, B] = input;
const em = 45;
const solution = [...input];
if(B < em) {
    // 시가 바뀌어야함
    if(A === 0) {
        solution[0] = 23;
    } else {
        solution[0] = A - 1;
    }
    solution[1] = 60 - (em - B); 
} else {
    solution[1] = B - em;
}
console.log(`${solution[0]} ${solution[1]}`);
