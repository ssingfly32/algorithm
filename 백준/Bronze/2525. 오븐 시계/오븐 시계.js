const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const currentT = input[0].split(' ').map(Number);
const h = currentT[0];
const m = currentT[1];
const neededT = parseInt(input[1]);

// 현재 시각을 분으로 변환
const totalMinutes = h * 60 + m + neededT;

// 새로운 시각을 계산
const newH = Math.floor(totalMinutes / 60) % 24;
const newM = totalMinutes % 60;

console.log(`${newH} ${newM}`);