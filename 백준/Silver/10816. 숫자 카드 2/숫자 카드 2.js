const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const cards = input[1].split(' ').map(Number);
const targetCards = input[3].split(' ').map(Number);
const cardMap = new Map();
cards.forEach(v => {
    if (cardMap.has(v)) {
        let count = cardMap.get(v);
        cardMap.set(v, count + 1);
        return;
    }
    cardMap.set(v, 1);
});
console.log(targetCards.map(v => cardMap.get(v) ? cardMap.get(v) : 0).join(' '));