function solution(people, limit) {
    // 한 보트에 최대 2명. 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크다.
    people.sort((a, b) => b - a);
    let answer = 0;
    // 가장 무거운 사람과 가장 가벼운 사람을 비교하기 위해 투 포인터 사용
    let left = 0;
    let right = people.length - 1;
    while (left <= right) {
        const sum = people[left] + people[right];
        if (people[left] + people[right] <= limit) {
            right--;  
        }
        left++;
        answer++;
    }
    return answer;
}