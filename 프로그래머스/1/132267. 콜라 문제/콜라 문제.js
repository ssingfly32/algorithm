function solution(a, b, n) {
    // a: 콜라를 받기 위해 마트에 주어야 하는 병 수 
    // b: 빈 병 a개를 가져다주면 마트가 주는 콜라 병 수
    // n: 상빈이가 가지고 있는 빈 병의 개수
    let emptyBottle = n;
    let takeBottleCnt = 0;
    while (emptyBottle >= a) {
        const exchange = Math.floor(emptyBottle / a) * b; // 교환 후 받는 콜라 개수
        takeBottleCnt += exchange; // 총 받은 콜라 개수 업데이트
        emptyBottle = emptyBottle % a + exchange; // 남은 빈 병 개수 업데이트
        
    }
    return takeBottleCnt;
}