const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [caseNum, ...testCases] = input;
const output = [];
const queue = [];
let front = 0;
for (const testCase of testCases) {
    const [command, num] = testCase.split(' ');
    switch (command) {
        case 'push' :
            queue.push(num);
            break;
        case 'pop' :
            if (front === queue.length) {
                output.push(-1);
            } else {
                output.push(queue[front]);
                front++;
            }
            break;
        case 'size' :
            output.push(queue.length - front);
            break;
        case 'empty' :
            output.push(front === queue.length ? 1 : 0);
            break;
        case 'front' :
            output.push(front === queue.length ? -1 : queue[front]);
            break;
        case 'back' :
            output.push(front === queue.length ? -1 : queue[queue.length - 1]);
            break;
    }
}

console.log(output.join('\n'));