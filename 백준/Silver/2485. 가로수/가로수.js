const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const [caseNum, ...locations] = input.map(Number);

// 기존에 심어진 나무 간격 배열
const distances = locations.slice(1).map((location, idx) => location - locations[idx]);

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const resultGcd = distances.reduce((acc, curr) => gcd(acc, curr));

// 전체거리 / resultGcd + 1 => 총 심어져야할 나무 개수
const totalTrees = (locations[locations.length - 1] - locations[0]) / resultGcd + 1;
const additionalTrees = totalTrees - locations.length;

console.log(additionalTrees);