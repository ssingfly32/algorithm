function solution(keymap, targets) {
    const map = new Map();
    for (const keys of keymap) {
        for (const [i, key] of [...keys].entries()) {
            if (!map.has(key) || map.get(key) > i + 1) {
                map.set(key, i + 1);                        
            }
        }
    }
    return targets.map(v => [...v].reduce((pre, cur) => { 
        return pre === -1 || !map.has(cur) ? -1 : pre + map.get(cur);
    }, 0));
}