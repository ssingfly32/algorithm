function solution(s) {
    const idxMap = new Map();
    return [...s].map((v, i) => {
        const el = idxMap.has(v) ? i - idxMap.get(v) : -1;
        idxMap.set(v, i);
        return el;
    })
}