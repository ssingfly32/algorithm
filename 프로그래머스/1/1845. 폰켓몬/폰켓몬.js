function solution(nums) {
    const cnt = nums.length / 2;
    const types = new Set(nums).size;
    return cnt < types ? cnt : types;
}