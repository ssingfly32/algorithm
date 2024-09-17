const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const allBaskets = Array.from({length : N}, (_, i) => i+1);
for(let i = 1; i <= M; i++) {
    const [b1, b2] = input[i].split(' ').map(Number);
    const reversedB = allBaskets.filter((e, idx) => idx >= b1-1 && idx <= b2-1).reverse();
    for(let j = 0; j < reversedB.length; j++) {
        allBaskets[b1-1+j] = reversedB[j];
    }
}
console.log(...allBaskets);