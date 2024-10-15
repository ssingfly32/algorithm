const input = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());

// 해당 의사코드의 시간 복잡도 계산 시 O(n^2)

// 수행 횟수
console.log(Math.pow(input, 2));

// 최고차항의 차수
console.log(2);