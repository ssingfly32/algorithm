const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const baskets = Array.from({length: N}, (_,i) => i+1);
for(let i = 1; i <= M; i++) {
    const [A, B] = input[i].split(' ').map(Number);
    [baskets[A-1], baskets[B-1]] = [baskets[B-1], baskets[A-1]];
}
console.log(...baskets);