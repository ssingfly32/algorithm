function solution(arr1, arr2) {
    return arr1.map((v, i) => v.map((el, j) => el + arr2[i][j]));
}