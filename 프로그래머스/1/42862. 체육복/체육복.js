function solution(n, lost, reserve) {
    const clothCnt = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        if (lost.indexOf(i + 1) > -1) clothCnt[i]--;
        if (reserve.indexOf(i + 1) > -1) clothCnt[i]++;
    }
    const answer = clothCnt.forEach((v, idx) => {
        if (!v) {
            if (idx && clothCnt[idx - 1] > 1) {
                clothCnt[idx - 1]--;
                clothCnt[idx]++;
            } else if (idx !== n - 1 && clothCnt[idx + 1] > 1) {
                clothCnt[idx + 1]--;
                clothCnt[idx]++;
            }
        }
    });
    return clothCnt.reduce((acc, v) => acc + (v > 0 ? 1 : 0), 0);
}