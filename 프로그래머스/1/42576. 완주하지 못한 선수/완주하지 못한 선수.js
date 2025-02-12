function solution(participant, completion) {
    participant.sort();
    completion.sort();
    for (const [i, person] of participant.entries()) {
        if (person !== completion[i]) return person;
    }
}