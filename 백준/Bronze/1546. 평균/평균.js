const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const subjectNum = parseInt(input[0]);
const scores = input[1].split(' ').map(Number);
const maxScore = Math.max(...scores);
scores.forEach((el,idx) => scores[idx] = Number((scores[idx] / maxScore * 100).toFixed(2)));
const answer = Number((scores.reduce((acc, cur) => acc + cur) / subjectNum).toFixed(2));
console.log(answer);