function solution(k, m, score) {
    // 이익이 발생하지 않는 경우 0을 리턴
    // 최대 점수 k, 한 상자 당 사과 수 m, 사과 점수 배열 score
    let answer = 0;
    score.sort((a, b) => b - a);
    for (let i = m - 1; i < score.length; i += m) {
    // (최저 사과 점수) * (한 상자에 담긴 사과 개수) * (상자의 개수)
        answer += score[i] * m;
    }
    return answer;
}