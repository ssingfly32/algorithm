const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = [];
let answer = '';
for (let i = 0; i < input.length; i++) {
    const tempArr = input[i].split(' ').join().replace('\r','');
    for (let j = 0; j < tempArr.length; j++) {
        if(arr[j]) {
            arr[j].push(tempArr[j]);
        } else {
            arr[j] = [tempArr[j]];
        }
    }
}
arr.forEach((el) => {
    let tempStr = el.join('');
    answer += `${tempStr}`
})
console.log(answer);
