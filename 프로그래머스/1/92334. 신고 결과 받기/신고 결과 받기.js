function solution(id_list, report, k) {
    const reportArr = [...new Set(report)].map(v => v.split(' '));
    const userToBeSuspended = new Map();
    // 유저들의 신고 당한 횟수를 담은 맵
    for (const [reporter, reportedU] of reportArr) {
        userToBeSuspended.has(reportedU) ? userToBeSuspended.set(reportedU, userToBeSuspended.get(reportedU) + 1) : userToBeSuspended.set(reportedU, 1);
    }
    
    const reporterObj = {};
    // key: 신고자, value: 정지될 유저(k번 이상 신고당한 유저) 배열
    for (const [reporter, reportedU] of reportArr) {
        if (userToBeSuspended.has(reportedU) && userToBeSuspended.get(reportedU) >= k) {
            reporterObj[reporter] ? reporterObj[reporter] = [...reporterObj[reporter], reportedU] : reporterObj[reporter] = [reportedU];
        }
    }
    return id_list.map(id => reporterObj[id] ? reporterObj[id].length : 0);
}