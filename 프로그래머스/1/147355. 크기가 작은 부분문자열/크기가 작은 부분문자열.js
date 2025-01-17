function solution(t, p) {
    let count = 0;
    const len = p.length;
    for (let i = 0; i + len <= t.length; i++) {
       if (Number(t.slice(i, i + len)) <= Number(p)) count++;
    }
    return count;
}