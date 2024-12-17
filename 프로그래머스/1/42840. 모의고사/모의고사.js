function solution(answers) {
    const answer = [];
    const methods = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    const correctAnswerCnts = new Map();
    
    for (let i = 0; i < 3; i++) {
        let correctAnswerCnt = 0; 
        for (let j = 0; j < answers.length; j++) {
            const num = j % methods[i].length;
            if (answers[j] === methods[i][num]) correctAnswerCnt++;
        }
        correctAnswerCnts.set(i + 1, correctAnswerCnt);
    }
    
    const maxCorrectAnswerCnt = Math.max(...correctAnswerCnts.values());
    correctAnswerCnts.forEach((v, k) => v === maxCorrectAnswerCnt && answer.push(k));
    
    return answer;
}