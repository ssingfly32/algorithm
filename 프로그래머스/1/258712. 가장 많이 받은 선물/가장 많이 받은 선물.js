function solution(friends, gifts) {
    let answer = 0;
    const giftCounts = Array(friends.length).fill(0);
    
    for (let i = 0; i < friends.length - 1; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const givingRecord = `${friends[i]} ${friends[j]}`;
            const receivingRecord = `${friends[j]} ${friends[i]}`;
            const giveCount = gifts.filter(v => v === givingRecord).length;
            const receiveCount = gifts.filter(v => v === receivingRecord).length;
            
            // 선물 기록 없거나 같을 때
            if ((!giveCount && !receiveCount) || (giveCount === receiveCount)) {
                checkGiftGrade(i, j);
                continue;
            }
            
            // 주고 받은 선물 기록이 있을 때
            giveCount > receiveCount ? giftCounts[i]++ : giftCounts[j]++;
        }
    }
    
    function checkGiftGrade(i, j) {
        const splittedGifts = gifts.map(v => v.split(' '));
        const gradeList = Array(2).fill(0);
        for (const record of splittedGifts) {
            const iRecordIndex = record.indexOf(friends[i]);
            const jRecordIndex = record.indexOf(friends[j]);
            iRecordIndex > -1 && (iRecordIndex === 0 ? gradeList[0]++ : gradeList[0]--);
            
            jRecordIndex > -1 && (jRecordIndex === 0 ? gradeList[1]++ : gradeList[1]--);
                

            
        }
        const checkHighGrade = gradeList[0] - gradeList[1];
        checkHighGrade && (checkHighGrade > 0 ? giftCounts[i]++ : giftCounts[j]++);
    }
    
    answer = Math.max(...giftCounts);
    return answer;
}