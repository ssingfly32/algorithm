function solution(n) {
    let answer = 0;
    while (answer < n) {
        if (n % ++answer === 1) break;
    }
    return answer;
}