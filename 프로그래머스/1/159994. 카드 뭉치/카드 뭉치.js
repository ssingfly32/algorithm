function solution(cards1, cards2, goal) {
    for (const [i, target] of goal.entries()) {
        if (cards1[0] === target) {
            cards1.shift(); 
        } else if (cards2[0] === target) {
            cards2.shift();
        } else {
            return "No"; 
        }  
    }
    return "Yes";
}