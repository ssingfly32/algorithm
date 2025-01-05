function solution(s)
{
    let sArr = s.split('');
    let result = findContinuousChar(sArr);
   return result.length ? 0 : 1;
}

function findContinuousChar(arr) {
    const temp = [];
    for (const char of arr) {
        if (!temp.length || temp[temp.length - 1] !== char) {
            temp.push(char);
        } else {
            temp.pop();
        }
    }
    return temp;
}