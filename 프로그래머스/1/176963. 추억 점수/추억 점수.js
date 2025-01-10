function solution(name, yearning, photo) {
    const map = new Map();
    name.forEach((v, i) => map.set(v, yearning[i]));
    const answer = [];
    for (const item of photo) {
        const result = item.reduce((pre, cur) => map.get(cur) ? pre + map.get(cur) : pre + 0, 0);
        answer.push(result);
    }
    return answer;
}
