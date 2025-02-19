function solution(s) {
    const dividedLength = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s.slice(dividedLength - 1, dividedLength + 1) : s[dividedLength];    
}