function solution(n, m) {
    const gcd = getGcd(n, m);
    const lcm = (n * m) / gcd;
    return [gcd, lcm];
}

function getGcd(a, b) {
    return b === 0 ? a : getGcd(b, a % b);
}