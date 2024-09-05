const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n1, n2] = input;
const array = Array(4).fill('');
const calc = () => {
   array[0] = n1 * n2[2];
   array[1] = n1 * n2[1];
   array[2] = n1 * n2[0];
   array[3] = array[0] + array[1]*10 + array[2]*100;
}
calc();
const solution = `${array[0]}\n${array[1]}\n${array[2]}\n${array[3]}`;

console.log(solution);