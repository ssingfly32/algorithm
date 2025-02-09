function solution(d, budget) {
    d.sort((a, b) => a - b);
    let totalM = 0;
    for (const [i, money] of d.entries()) {
        if (totalM + money > budget) return i;
        totalM += money;
    }
    return d.length;
}