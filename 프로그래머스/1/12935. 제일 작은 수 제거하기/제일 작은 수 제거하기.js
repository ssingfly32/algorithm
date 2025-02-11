function solution(arr) {
    const min = Math.min(...arr);
    const result = arr.length !== 1 ? arr.filter(v => v !== min) : [-1];
    return result;
}