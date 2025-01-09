function solution(players, callings) {
    const map = new Map();
    players.forEach((v, i) => map.set(v, i));
    for (const calling of callings) {
        const index = map.get(calling);
        [players[index - 1], players[index]] = [players[index], players[index - 1]];
        const frontPlayer = players[index];
        map.set(calling, index - 1);
        map.set(frontPlayer, index); 
    }
    return players;
}