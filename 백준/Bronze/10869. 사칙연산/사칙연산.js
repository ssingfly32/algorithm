const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const array = Array(5).fill('');
const calc = () => {
    const a = input[0];
    const b = input[1];
    array[0] = a+b;
    array[1] = a-b;
    array[2] = a*b;
    array[3] = Math.floor(a/b);
    array[4] = a%b;
}
calc();
const solution = `${array[0]}\n${array[1]}\n${array[2]}\n${array[3]}\n${array[4]}`;

console.log(solution);