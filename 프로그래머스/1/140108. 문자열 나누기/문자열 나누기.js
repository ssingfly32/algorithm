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
    let firstCharCnt = 0;
    for (const [i, char] of [...str].entries()) {    
        char === str[0] ? firstCharCnt++ : firstCharCnt--;
        if (i && !firstCharCnt) {
            return str.slice(i + 1);
        }
    }
    return '';
}