function solution(s) {
    const splittedS = s.split(' ');
    for (const [i, word] of splittedS.entries()) {
        splittedS[i] = [...word].map((v, i) => i % 2 === 0 ? v.toUpperCase() : v.toLowerCase()).join('');
    }
    return splittedS.join(' ');
}