function solution(arr)
{
    const answer = [];
    
    for (const [i, item] of arr.entries()) {
        if (!answer.length || arr[i - 1] !== item) answer.push(item);
    }
    return answer;
}