let input = require('fs').readFileSync('/dev/stdin').toString().trim();
const croatiaAlps = ['c=','c-','dz=','d-','lj','nj','s=','z='];
croatiaAlps.forEach((el) => {
    let count = 0;
    while(count > -1) {
        let elIdx = input.indexOf(el);
        if(elIdx > -1) {
            input = input.replace(el, ',');
        }
        count = elIdx;
    } 
})
console.log(input.length);