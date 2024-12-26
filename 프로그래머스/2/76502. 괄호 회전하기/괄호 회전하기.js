function solution(s) {
    const sArr = s.split('');
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        // 첫번째 요소를 뒤로
        if (i) {
            const firstEl = sArr.shift();
            sArr.push(firstEl);
        }
        // 올바른 괄호 문자열인지 검사
        if (validateS(sArr)) answer++;
    }
    return answer;
}
function validateS(arr) {
        const prev = [];
        for (const el of arr) {
            if (el === '{' || el === '(' || el === '[') {
                prev.push(el);
            } else {
                if (!prev.length) return false;
                const previousOne = prev.pop();
                if (previousOne === '{') {
                    if (el !== '}') return false;
                } else if (previousOne === '(') {
                    if (el !== ')') return false;
                } else {
                    if (el !== ']') return false;
                }
            }
        }
        return prev.length ? false : true;
    };