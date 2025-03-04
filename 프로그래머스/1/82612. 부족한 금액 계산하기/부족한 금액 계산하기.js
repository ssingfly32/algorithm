function solution(price, money, count) {
    let requiredPrice = 0;
    for (let i = 0; i < count; i++) {
        requiredPrice += price * (i + 1);
    }
    return requiredPrice > money ? requiredPrice - money : 0;
}