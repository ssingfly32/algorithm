const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const encyclopedia = input.slice(1, n + 1);
const questions = input.slice(n + 1, m + n + 1);
const encyclopediaMap = new Map();
const encyclopediaNums = new Map();
encyclopedia.forEach((v, idx) => encyclopediaMap.set(idx + 1, v));
encyclopedia.forEach((v, idx) => encyclopediaNums.set(v, idx + 1));
let answer = '';
for (const question of questions) {
    const encyclopediaNum = Number(question);
    if (!Number.isNaN(encyclopediaNum)) {
        answer += encyclopediaMap.get(encyclopediaNum) + '\n';
        continue;
    } 
    answer += encyclopediaNums.get(question) + '\n';
}

console.log(answer);