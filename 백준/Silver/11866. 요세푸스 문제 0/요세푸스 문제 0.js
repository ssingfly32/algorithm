const input = require('fs').readFileSync('dev/stdin').toString().trim();
const [n, k] = input.split(' ').map(Number);
const arr = Array.from({ length: n }, (_, idx) => idx + 1); 
const result = [];
let index = 0; 

while (arr.length > 0) {
    index = (index + k - 1) % arr.length; 
    result.push(arr.splice(index, 1)[0]); 
}

console.log(`<${result.join(', ')}>`); 