function solution(seoul) {
    for (const [i, name] of seoul.entries()) {
        if (name === 'Kim') return `김서방은 ${i}에 있다`;
    }
}