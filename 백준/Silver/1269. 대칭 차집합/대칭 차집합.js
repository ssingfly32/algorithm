const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);
const aSet = new Set(a);
const bSet = new Set(b);
const aMinusB = a.filter(v => !bSet.has(v));
const bMinusA = b.filter(v => !aSet.has(v));
console.log(aMinusB.length + bMinusA.length);