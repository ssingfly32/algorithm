function solution(prices) {
    const pl = prices.length;
    const answer = new Array(prices).fill(0);

    const stack = [];
    for (let i = 0; i < pl; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const j = stack.pop();
        answer[j] = pl - 1 - j;
    }

    return answer;
}