function solution(numbers, hand) {
    let answer = '';
    const rc = [[3, 1], [0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]];
    let currentL = [3, 0];
    let currentR = [3, 2];
    for (const num of numbers) {
        // *, #에서 시작
        // 1, 4, 7이면 L / 3, 6, 9면 R / 2, 5, 8, 0이면 거리 계산
        if (num === 1 || num === 4 || num === 7) {
            currentL = rc[num];
            answer += 'L';
        } else if (num === 3 || num === 6 || num === 9) {
            currentR = rc[num];
            answer += 'R';
        } else {
            const leftD = Math.abs(rc[num][0] - currentL[0]) + Math.abs(rc[num][1] - currentL[1]);
            const leftR = Math.abs(rc[num][0] - currentR[0]) + Math.abs(rc[num][1] - currentR[1]);
            const result = leftD === leftR ? hand[0].toUpperCase() : (leftD < leftR ? 'L' : 'R');
            result === 'L' ? currentL = rc[num] : currentR = rc[num];
            answer += result;
        }
    }
    return answer;
}