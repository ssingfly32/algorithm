function solution(n) {
    const arr = Array.from({length: n}, (_, i) => i + 1);
    const compositeNumbers = [];
    for (const num of arr) {
        if (compositeNumbers.length) {
            if (compositeNumbers.some(el => num % el === 0)) {
                compositeNumbers.push(num);
                continue;
            }
        }
        if (checkCompositeNumber(num)) compositeNumbers.push(num);
    }
    
    return compositeNumbers.length;
}

function checkCompositeNumber(num) {
    let i = 1;
    let divisors = 0;
    while (divisors < 3 && i <= num) {
        if (num % i++ === 0) divisors++;
    }
    return divisors < 3 ? false : true;
}