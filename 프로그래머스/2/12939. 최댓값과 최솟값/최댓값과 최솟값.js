function solution(s) {
    const sortedNums = s.split(' ').sort((a, b) => a - b);
    return `${sortedNums[0]} ${sortedNums[sortedNums.length - 1]}`
}