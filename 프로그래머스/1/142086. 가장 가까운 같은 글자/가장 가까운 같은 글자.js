function solution(s) {
    const idxMap = new Map();
    const answer = [];
    for (const [i, char] of [...s].entries()) {
        answer.push(idxMap.has(char) ? i - idxMap.get(char) : -1); 
        idxMap.set(char, i); 
    }
    return answer;
}