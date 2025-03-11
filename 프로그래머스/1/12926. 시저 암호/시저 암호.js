function solution(s, n) {
    const alphabets = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const answer = [...s].map(v => {
        if (v === " ") return v;
        const upperV = v.toUpperCase();
        const isVcapital = upperV === v;
        const targetIdx = (alphabets.indexOf(upperV) + n) % alphabets.length;
        return isVcapital ? alphabets[targetIdx] : alphabets[targetIdx].toLowerCase();
    })
    return answer.join("");
}