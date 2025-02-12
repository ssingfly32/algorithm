function solution(participant, completion) {
    // participant.sort();
    // completion.sort();
    // for (const [i, person] of participant.entries()) {
    //     if (person !== completion[i]) return person;
    // }
    
    // 해시로 풀기
    const map = new Map();
    let answer = '';
    participant.forEach(v => map.set(v, map.get(v) + 1 || 1));
    completion.forEach(v => map.set(v, map.get(v) - 1));
    map.forEach((v, k) => v ? answer = k : '');
    return answer;
}