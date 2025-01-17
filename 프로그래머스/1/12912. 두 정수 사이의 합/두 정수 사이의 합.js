function solution(a, b) {
    const temp = [a, b].sort((a, b) => a - b);
    return Array.from({length: temp[1] - temp[0] + 1}, (_, i) => i + temp[0]).reduce((pre, cur) => pre + cur, 0);
}