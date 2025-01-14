function solution(n, m, section) {
    // 벽 n, 롤러 n, 다시 칠해야 할 구역 section
    if (m === 1) return section.length;
    if (section[section.length - 1] - section[0] + 1 <= m) return 1;
    let count = 0;
    let painted = 0;
    for (s of section) {
        if (s <= painted) continue;
        count++;
        painted = s + m - 1;
    }
    return count;
}