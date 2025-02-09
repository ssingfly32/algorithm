function solution(id_list, report, k) {
    const reportArr = [...new Set(report)].map(v => v.split(' '));
    const userToBeSuspended = new Map();
    // 유저들의 신고 당한 횟수를 담은 맵
    for (const [reporter, reportedU] of reportArr) {
        userToBeSuspended.set(reportedU, userToBeSuspended.get(reportedU) + 1 || 1);
    }
    
    const reporterObj = new Map();
    // key: 신고자, value: 정지될 유저(k번 이상 신고당한 유저) 배열
    for (const [reporter, reportedU] of reportArr) {
        if (userToBeSuspended.get(reportedU) >= k) {
            reporterObj.set(reporter, reporterObj.get(reporter) + 1 || 1);
        }
    }
    return id_list.map(id => reporterObj.get(id) || 0);
}