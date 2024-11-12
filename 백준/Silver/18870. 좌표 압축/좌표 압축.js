const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const caseNum = Number(input[0]);
const coordinates = input[1].split(' ').map(Number);
const sortedArr = Array.from(new Set(coordinates)).sort((a, b) => a - b);
const coordinateMap = new Map();
sortedArr.forEach((v, idx) => coordinateMap.set(v, idx));
const answer = coordinates.map(v => coordinateMap.get(v));
console.log(answer.join(' '));