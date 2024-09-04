const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const array = Array(4).fill(' '); 

const calc = () => {
    const A = input[0];
    const B = input[1];
    const C = input[2];
    array[0] = (A+B)%C;
    array[1] = ((A%C) + (B%C))%C;
    array[2] = (A*B)%C;
    array[3] = ((A%C) * (B%C))%C;
}
calc();
const solution = `${array[0]}\n${array[1]}\n${array[2]}\n${array[3]}`;

console.log(solution);