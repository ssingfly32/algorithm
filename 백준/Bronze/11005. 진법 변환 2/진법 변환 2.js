const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let num = parseInt(input[0]);  
const B = parseInt(input[1]);  
const str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 

let result = '';

while (num > 0) {
    result = str[num % B] + result;  
    num = Math.floor(num / B);  
}

console.log(result);