function solution(babbling) {
    let words = ["aya", "ye", "woo", "ma"];
    
    function validate(str, idx) {
        if (str === '') return 1;
        for (const [i, word] of words.entries()) {
            const startIdx = str.indexOf(word);
            if (startIdx === 0 && i !== idx) {
                return validate(str.slice(word.length), i);
            }
        }
        return 0;
    }
    return babbling.reduce((acc, v) => acc + validate(v, -1), 0);
}