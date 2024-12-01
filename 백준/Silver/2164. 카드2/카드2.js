const input = Number(require('fs').readFileSync('dev/stdin').toString().trim());
const queue = Array.from({length : input}, (_, i) => i + 1);
let front = 0; 
let back = input; 
while (back - front > 1) {
    front++;
    queue[back++] = queue[front++]; 
}
console.log(queue[front]);