function solution(s){
    const result = [...s.toLowerCase()].reduce((pre, cur) => {
        if (cur === 'p') return pre + 1;
        if (cur === 'y') return pre - 1;
        return pre + 0;
    }, 0);
    return !result ? true : false;
}