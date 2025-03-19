function solution(number, limit, power) {
    const divisors = [];
    for (let i = 1; i <= number; i++) {
        const temp = new Set();
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) temp.add(j); 
        }
        for (const divisor of [...temp]) {
            temp.add(i / divisor);
        }
        divisors.push([...temp]);
    }
    const answer = divisors.map(v => v.length);
    return answer.reduce((pre, cur) => pre + (cur > limit ? power : cur), 0);
}