function solution(left, right) {
    const arr = Array.from({length: right - left + 1}, (_, i) => left + i);
    return arr.reduce((acc, v) => {
        const isEvenDcnt = checkDcntIsEven(v);
        return acc + (isEvenDcnt ? v : v * -1); 
    }, 0);
}

function checkDcntIsEven(num) {
    const arr = Array.from({length: num}, (_, i) => i + 1);
    const result = arr.reduce((acc, v) => acc + (num % v === 0 ? 1 : 0), 0);
    return result % 2 === 0 ? true : false;
}