function solution(N, stages) {
    const temp = [];
    const totalPlayers = stages.length;
    
    for (let i = 0; i < N; i++) {
        let failedPlayers = 0;
        let clearedPlayers = 0;
        stages.forEach(v => v >= i + 1 ? (v === i + 1 ? failedPlayers++ : clearedPlayers++) : '');
        const reachedPlayers = failedPlayers + clearedPlayers;
        const failureRate = reachedPlayers ? failedPlayers / reachedPlayers : 0; 
        temp.push([i + 1, failureRate]);
    }
    
    const answer = temp.sort((a, b) => b[1] - a[1]).map(v => v[0]);
    return answer;
}