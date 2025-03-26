function solution(dartResult) {
    // 총 3번의 기회
    // 각 기회마다 0점에서 10점까지이다.
    // S: 1제곱, D: 2제곱, T: 3제곱
    // * 스타상: 해당점수와 바로전에 얻은 점수 2배, # 아차상: 해당 점수 -
    // 0점부터 10점까지 있기 때문에 10 주의.
    
    let intBuffer = '';
    const stack = [];
    const bonus = {'S': 1, 'D': 2, 'T': 3};
    for (let i = 0; i < dartResult.length; i++) {
        // 숫자일 때
        if (!isNaN(dartResult[i])) {
            intBuffer += dartResult[i];
        } else if (isNaN(dartResult[i])) { // 숫자가 아닐 때
            // 숫자가 아니고 S, D, T중 하나일 때 점수 계산
            if (dartResult[i] in bonus) {
                stack.push(Number(intBuffer) ** bonus[dartResult[i]]);
            } else {
                const len = stack.length;
                if (dartResult[i] === '*') {    // 옵션 *
                    stack[len - 1] = stack[len - 1] * 2;
                    // 이전 게임이 있다면 이전 게임에도 * 2
                    if (len > 1) {
                        stack[len - 2] = stack[len - 2] * 2;
                    }
                } else {
                    // 옵션이 #일 때
                    stack[len - 1] = stack[len - 1] * -1;
                }
            }
            // 다음 문자가 숫자일 시 
            if (!isNaN(dartResult[i + 1])) {
                intBuffer= '';
            }
        }
    }
    return stack.reduce((acc, cur) => acc + cur, 0);
}