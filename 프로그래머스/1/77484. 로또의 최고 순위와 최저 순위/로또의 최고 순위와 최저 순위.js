function solution(lottos, win_nums) {
    var answer = [];
    const grades = {'6': 1, '5': 2, '4': 3, '3': 4, '2': 5, '1': 6, '0': 6};
    
    // 탐색 쉽도록 로또 번호를 set으로 변환
    const lottosSet = new Set(lottos);
    
    // 당첨 번호와 일치하는 로또 번호 개수 확인
    const matchedCount = win_nums.reduce((acc, v) => acc + (lottosSet.has(v) ? 1 : 0), 0);
    
    // 0의 개수 확인
    const zeroCnt = lottos.reduce((acc, v) => acc + (v === 0 ? 1 : 0), 0);
    
    return [grades[matchedCount+zeroCnt+''], grades[matchedCount+'']];
}