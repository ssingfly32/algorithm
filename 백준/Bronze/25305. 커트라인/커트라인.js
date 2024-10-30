const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const [examinees, winners] = input[0]. split(' ').map(Number);

const scores = input[1].split(' ').map(Number); // scores 배열

const sortedScores = scores.sort((a, b) => b - a);

console.log(sortedScores[winners - 1]);