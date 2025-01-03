function solution(k, score) {
    const topRank = [];
    const lowestScore = [];
    for (const num of score) {
        if (topRank.length < k) {
            topRank.push(num);
        } else {
            const prevLowestScore = lowestScore[lowestScore.length - 1];
            if (num > prevLowestScore) {
            const lowRankIndex = topRank.indexOf(prevLowestScore);               topRank[lowRankIndex] = num;
            }
        }
        lowestScore.push(Math.min(...topRank));
    }
    return lowestScore;
}