function solution(keymap, targets) {
    const answer = [];
    const map = new Map();
    for (const keys of keymap) {
        for (const [i, key] of [...keys].entries()) {
            if (!map.has(key) || map.get(key) > i + 1) {
                map.set(key, i + 1);                        
            }
        }
    }
    for (const [idx, target] of targets.entries()) {
        let count = 0;
        for (const char of [...target]) {
            if (!map.get(char)) {
                count = -1;
                break;
            }
            count += map.get(char);
        }
        answer[idx] = count;
    }
    return answer;
}