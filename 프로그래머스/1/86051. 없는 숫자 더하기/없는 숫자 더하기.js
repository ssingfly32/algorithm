function solution(numbers) {
    const set = new Set(numbers);
    return [0,1,2,3,4,5,6,7,8,9].filter(v => !set.has(v)).reduce((pre, cur) => pre + cur, 0); 
}