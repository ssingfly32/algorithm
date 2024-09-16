const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [basketNum, count] = input[0].split(' ').map(Number);
const baskets = Array(basketNum).fill(0);
for(let i = 1; i <= count; i++) {
    const [b1, b2, ballN] = input[i].split(' ').map(Number);
    for(let i = b1; i <= b2; i++) {
        baskets[i-1] = ballN;
    }
}
console.log(...baskets);