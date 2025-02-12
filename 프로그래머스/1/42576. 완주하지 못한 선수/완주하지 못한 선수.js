function solution(participant, completion) {
    // participant.sort();
    // completion.sort();
    // for (const [i, person] of participant.entries()) {
    //     if (person !== completion[i]) return person;
    // }
    
    // 해시로 풀기
    const map = new Map();
    let answer = '';
    for (const [i, person] of participant.entries()) {
        map.set(person, map.has(person) ? map.get(person) + 1 : 1);
        if (i < participant.length - 1) {
            const completedRunner = completion[i];
            map.set(completedRunner, map.has(completedRunner) ? map.get(completedRunner) - 1 : -1);            
        }
    }
    map.forEach((v, k) => v ? answer = k : '');
    return answer;
}