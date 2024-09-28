const [rise, goDown, target] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const answer = Math.ceil((target - rise) / (rise - goDown) +1);
console.log(answer); 