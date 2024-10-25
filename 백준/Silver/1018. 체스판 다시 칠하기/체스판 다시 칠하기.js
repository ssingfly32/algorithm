const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1, N + 1);
const wStartBoard = ['WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW', 'WBWBWBWB','BWBWBWBW'];
const bStartBoard = ['BWBWBWBW','WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW', 'WBWBWBWB','BWBWBWBW', 'WBWBWBWB'];
let redrawCounts = [];

function countRedrawNum(row, col) {
    let wBoardCount = 0;
    let bBoardCount = 0;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[row+i][col+j] !== wStartBoard[i][j]) wBoardCount++;
            if (board[row+i][col+j] !== bStartBoard[i][j]) bBoardCount++;
        }
    }

    const result = wBoardCount < bBoardCount ? wBoardCount : bBoardCount;
    redrawCounts.push(result);  
}

for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
        countRedrawNum(i, j);
    }
}

const minRedrawCount = Math.min(...redrawCounts);
console.log(minRedrawCount);