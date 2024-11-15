const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const [hasntHeard, hasntSee] = input[0].split(' ').map(Number);
const personHanstHeard = input.slice(1, hasntHeard + 1);
const personHasntSee = input.slice(hasntHeard + 1);
const phsSet = new Set(personHasntSee);
const personFitsBoth = personHanstHeard.filter(v => phsSet.has(v)).sort();
console.log(`${personFitsBoth.length}\n${personFitsBoth.join('\n')}`);