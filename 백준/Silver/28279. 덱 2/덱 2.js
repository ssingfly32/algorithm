const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const commands = input.slice(1);
const deque = Array(commands.length * 2);
const output = [];
let front = commands.length;
let back = commands.length;
for (const command of commands) {
    const [cmd, num] = command.split(' ').map(Number);
    switch (cmd) {
        case 1:
            deque[--front] = num;
            break;
        case 2:
            deque[back++] = num;
            break;
        case 3:
            output.push(front < back ? deque[front++] : -1);
            break;
        case 4: 
            output.push(front < back ? deque[--back] : -1);
            break;
        case 5: 
            output.push(back - front);
            break;
        case 6: 
            output.push(front === back ? 1 : 0);
            break;
        case 7: 
            output.push(front < back ? deque[front] : -1);
            break;
        case 8: 
            output.push(front < back ? deque[back - 1] : -1);
            break;
    }
}
console.log(output.join('\n'));