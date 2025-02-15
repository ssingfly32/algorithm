function solution(absolutes, signs) {
    return absolutes.reduce((pre, cur, i) => pre + (signs[i] ? cur : cur * -1), 0);
}