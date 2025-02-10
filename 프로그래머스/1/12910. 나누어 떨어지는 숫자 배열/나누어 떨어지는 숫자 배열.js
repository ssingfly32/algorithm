function solution(arr, divisor) {
    const result = arr.filter(v => !(v % divisor));
    return result.length ? result.sort((a, b) => a - b) : [-1];
}