const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const sCardCnt = input[0];
const sCardList = input[1].split(' ')
const aCardCnt = input[2];
const aCardList = input[3].split(' ');
const matchingCntList = new Array(input[2]);

const sCardMap = new Map();
sCardList.forEach(sCard => {
    let sCardCnt = sCardMap.get(sCard);
    if(sCardCnt) {
        sCardCnt++;
    } else {
        sCardCnt = 1;
    }
    sCardMap.set(sCard, sCardCnt);
})

aCardList.map((aCard, idx)=> {
    const matchingCnt = sCardMap.get(aCard)
    if(matchingCnt) {
        matchingCntList[idx] = matchingCnt;
    } else {
        matchingCntList[idx] = 0;
    }
    
})
console.log(matchingCntList.join(' '));