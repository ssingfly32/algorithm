const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [caseNum, ...words] = input;
const wordsSet = new Set(words);
const setArray = Array.from(wordsSet);
setArray.sort((a, b) => a.length - b.length || a.localeCompare(b));
console.log(setArray.join('\n'));