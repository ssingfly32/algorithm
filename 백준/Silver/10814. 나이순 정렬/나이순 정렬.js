const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [caseNum, ...userInfos] = input;
const ageAndName = userInfos.map(v => v.split(' '));
ageAndName.sort((a, b) => Number(a[0]) - Number(b[0]));
console.log(ageAndName.map(v => v.join(' ')).join('\n'));