function solution(numbers) {
    let addSet = new Set();
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            addSet.add(numbers[i] + numbers[j]);
        }
    }
    const answer = Array.from(addSet).sort((a, b) => a - b);
    return answer;
}