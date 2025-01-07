function solution(board, moves) {
    // 터트려져 사라진 인형의 개수
    let answer = 0;
    const basket = [];
    for (const move of moves) {
        for (const space of board) {
            const target = space[move - 1];
            if (target) {
                basket.push(target);
                space[move - 1] = 0;
                break;
            }
        }
        if (basket.length > 1) {
            const bl = basket.length;
            if (basket[bl - 1] === basket[bl - 2]) {
                basket.pop();
                basket.pop();
                answer += 2;
            }           
        }
    } 
    return answer;
}