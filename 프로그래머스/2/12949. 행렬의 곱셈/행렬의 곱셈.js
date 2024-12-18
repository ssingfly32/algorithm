function solution(arr1, arr2) {
    const answer = [];
    for (const temp1 of arr1) {
        const tempArr = [];
        for (let i = 0; i < arr2[0].length; i++) {
            const result = arr2.reduce((pre, cur, idx) => pre + cur[i] * temp1[idx], 0);
            tempArr.push(result);   
        }
        answer.push(tempArr);
    }
    return answer;
}
