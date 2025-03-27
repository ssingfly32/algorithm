const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

// test case
// 4 7
// 6 13
// 4 8
// 3 6
// 5 12
const [itemQty, k] = input[0].split(' ').map(Number);
const dp = Array.from({length: itemQty + 1}, () => new Array(k + 1). fill(0));
let answer = 0;
for (let i = 1; i <= itemQty; i++) {
    const [currentW, profit] = input[i].split(' ').map(Number);
    for (let w = 1; w <= k; w++) {
        if (currentW > w) { // 안 넣는다
            dp[i][w] = dp[i - 1][w];
        } else { // 넣는다 (currentW <= w)
            const newProfit = profit + dp[i - 1][w - currentW];                                          
            dp[i][w] = newProfit > dp[i - 1][w] ? newProfit : dp[i - 1][w];
            if (answer < dp[i][w]) answer = dp[i][w];
        }
    }
}
console.log(answer);