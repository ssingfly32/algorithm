function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    const allTimeParam = [video_len, pos, op_start, op_end];
    
    // 초로 치환
    const convertedParam = convertToSec(allTimeParam);
    const [convertedVideoLen, convertedPos, convertedOp_start, convertedOp_end] = convertedParam;
  
    function convertToSec(arr) {
        arr = arr.map(v => {
            const tempArr = v.split(':').map(Number);
            return tempArr[0] * 60 + tempArr[1];
        })
        return arr;
    }
    
     function goNext(posParam) {
        const nextPos = posParam + 10;
        return nextPos + 10 > convertedVideoLen ? convertedVideoLen : nextPos;
    }
    
    function goPrev(posParam) {
        const prevPos = posParam - 10;
        return prevPos - 10 < 1 ? 0 : prevPos;
    }
    
    // op일 시 건너뛰기
    let skippedPos = skipOp(convertedPos);
    function skipOp(posParam) {
        return (posParam >= convertedOp_start && posParam <= convertedOp_end) ? convertedOp_end : posParam;
    }
    
    for(const command of commands) {
     skippedPos = command === 'next' ? goNext(skippedPos) : goPrev(skippedPos);
        skippedPos = skipOp(skippedPos);
            
    }
    
    let answerArr = [];
    answerArr.push(parseInt(skippedPos / 60).toString());
    answerArr.push(parseInt(skippedPos % 60).toString());
    answerArr = answerArr.map(v => v.length < 2 ? v.padStart(2,"0") : v);
    answer = answerArr.join(':');
    
    return answer;
}