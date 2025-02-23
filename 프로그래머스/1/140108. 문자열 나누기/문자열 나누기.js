function solution(s) {
    let cnt = 0;
    let str = s;
    while (str !== '') {
        str = checkWords(str);
        cnt++;
    }
    return cnt;
}

function checkWords(str) {
    const firstChar = str[0];
    let firstCharCnt = 0;
    let otherCharCnt = 0;
    for (const [i, char] of [...str].entries()) {    
        char === firstChar ? firstCharCnt++ : otherCharCnt++;
        if (otherCharCnt === firstCharCnt) {
            return str.slice(i + 1);
        }
    }
    return '';
}