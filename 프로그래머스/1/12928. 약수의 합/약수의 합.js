function solution(n) {
    const arr = Array.from({length: n}, (_, i) => i + 1);
    const answer = arr.filter(v => n % v === 0).reduce((pre, cur) => pre + cur, 0);
    return answer;
}