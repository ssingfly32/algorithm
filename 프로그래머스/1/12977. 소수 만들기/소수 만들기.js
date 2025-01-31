function solution(nums) {
    let count = 0;
    nums.sort();
    const maxArr = getPrimeArr(nums);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const result = nums[i] + nums[j] + nums[k];
                if (maxArr[result]) count++;
            }
        }
    }
    return count;
}

function getPrimeArr(nums) {
    const maxNum = 3000;
    const maxArr = new Array(maxNum + 1).fill(true);
    maxArr[0] = maxArr[1] = false;
    for (let i = 2; i * i <= maxNum; i++) {
        if (maxArr[i]) {
            for (let j = i * i; j <= maxNum; j += i) {
                maxArr[j] = false;
            }
        }
    }
    return maxArr;
}
