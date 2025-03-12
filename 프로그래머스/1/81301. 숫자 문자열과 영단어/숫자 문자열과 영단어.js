function solution(s) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const answer = [];
    
    function findWords(string) {
        if (string === "") return;
        
        if (!isNaN(string[0])) {
            answer.push(string[0]);
            return findWords(string.slice(1));
        }
        
        for (const [i, word] of words.entries()) {
            if (string.indexOf(word) === 0) {
                answer.push(i);
                return findWords(string.slice(word.length));
            }    
        }
    }
    
    findWords(s);
    return Number(answer.join(""));
}