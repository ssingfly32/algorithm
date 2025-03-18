function solution(n, arr1, arr2) {
    // n: 지도의 한 변 크기
    const binary1 = arr1.map(v => v.toString(2).padStart(n, "0"));
    const binary2 = arr2.map(v => v.toString(2).padStart(n, "0"));
    const answer = [];
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            str += (binary1[i][j] === "0" && binary2[i][j] === "0") ? ' ' : '#';  
        }
        answer.push(str);
    }
    return answer;
}