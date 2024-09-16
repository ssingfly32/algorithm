const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const totalF = parseInt(input[0]);
const kindC = parseInt(input[1]);
let priceAndNum = 0;
for(let i = 2; i <= kindC+1; i++) {
  const [price, num] = input[i].split(' ').map(Number);
  priceAndNum += price * num;
}
const sol = priceAndNum === totalF ? 'Yes' : 'No';
console.log(sol);