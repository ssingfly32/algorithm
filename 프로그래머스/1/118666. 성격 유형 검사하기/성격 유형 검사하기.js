function solution(survey, choices) {
    const types = ["RT", "CF", "JM", "AN"];
    const scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

    choices.forEach((choice, i) => {
        const [first, second] = survey[i];
        const score = Math.abs(choice - 4); // 4에서 얼마나 떨어졌는지 계산

        if (choice < 4) scores[first] += score; // 왼쪽 유형 점수 추가
        else if (choice > 4) scores[second] += score; // 오른쪽 유형 점수 추가
    });

    return types.map(([a, b]) => (scores[a] >= scores[b] ? a : b)).join("");
}
