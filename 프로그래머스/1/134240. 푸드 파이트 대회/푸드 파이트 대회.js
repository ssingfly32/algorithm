function solution(foods) {
    let answer = "";
    for (let i = 1; i < foods.length; i++) {
        const qty = Math.floor(foods[i] / 2);
        answer += (i+'').repeat(qty);
    }
    return answer + "0" + [...answer].reverse().join("");
}