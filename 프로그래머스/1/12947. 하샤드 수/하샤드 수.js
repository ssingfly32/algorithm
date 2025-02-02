function solution(x) {
    return x % ([...(x+'')].map(Number).reduce((pre, cur) => pre + cur, 0)) === 0 ? true : false;
}