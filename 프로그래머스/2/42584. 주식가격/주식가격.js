function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const pL = prices.length;
    for (let i = 0; i < pL; i++) {
        for (let j = i + 1; j < pL; j++) {
            answer[i]++;
            if (prices[i] > prices[j]) break;
        }
    }
    return answer;
}