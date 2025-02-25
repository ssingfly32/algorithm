function solution(X, Y) {
    const matchedNums = Array.from(new Array(10), () => new Array(2).fill(null));
    const x = X+'';
    const y = Y+'';
    let lastNum = 9;
    for (let i = 0; i < 10; i++) {
        const xCnt = findTarget(lastNum, x);
        const yCnt = findTarget(lastNum, y);
        matchedNums[i][0] = lastNum--;
        matchedNums[i][1] = xCnt <= yCnt ? xCnt : yCnt;
    }    
    let answer = '';
    matchedNums.forEach(v => v[1] > 0 ? answer += (v[0] + '').repeat(v[1]) : '');
    return answer === '' ? '-1' : (Number(answer) === 0 ? '0' : answer); 
}

function findTarget(target, str) {    
    let currentIdx = -1;
    let count = 0;
    do {
        currentIdx = str.indexOf(target, currentIdx + 1);
        if (currentIdx > -1) count++;
    } while (currentIdx > -1)
    return count;
}
