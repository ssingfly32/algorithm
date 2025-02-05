function solution(n) {
    const answer = [];
    // 세 개의 기둥, 작은 것이 맨 위, 큰 원판은 항상 작은 원판 밑에 있어야 함.
    function hanoi(n, from, to, aux) {
        if (n === 1) {
            answer.push([from, to]);
            return;
        }
        // n-1개의 원판을 보조 기둥으로 옮기고
        hanoi(n - 1, from, aux, to);
        // 큰 원판을 목표 기둥으로 옮긴다.
        answer.push([from, to]);
        hanoi(n - 1, aux, to, from);
    }
    hanoi(n, 1, 3, 2);
    return answer;
}