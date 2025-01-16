function solution(s, skip, index) {
    let answer = '';
    const alphabets = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't' ,'u', 'v', 'w', 'x', 'y', 'z'];
    const set = new Set(alphabets);
    const map = new Map();
    [...skip].forEach(v => set.has(v) && set.delete(v));
    const setArr = [...set];
    setArr.forEach((v, i) => map.set(v, i));
    for (const char of [...s]) {
        const firstIdx = map.get(char);
        const targetIdx = (firstIdx + index) % setArr.length;
        answer += setArr[targetIdx];
    }
    return answer;
}