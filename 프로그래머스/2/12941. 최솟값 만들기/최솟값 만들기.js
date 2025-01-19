function solution(A,B){
    var answer = 0;
    const ascendingA = A.sort((a, b) => a - b);
    const descendingB = B.sort((a, b) => b - a)
    return ascendingA.reduce((pre, cur, i) => pre + cur * descendingB[i], 0);
}