const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 전공평점은 전공과목별 (학점 × 과목평점)의 합을 학점의 총합으로 나눈 값
const ranks = {'A+' : 4.5, 'A0' : 4.0, 'B+' : 3.5, 'B0' : 3.0, 'C+' : 2.5, 'C0' : 2.0,'D+' : 1.5, 'D0' : 1.0, 'F' : 0.0};
// 학점이 P일땐 계산에서 제외
let allSubScore = 0;
let allGrade = 0;
for (let i = 0; i< input.length; i++) {
    const [subject, average, grade] = input[i].split(' ');   // 과목명, 학점, 등급
    if(grade !== 'P') {
        allSubScore += parseInt(average) * ranks[grade];
        allGrade += parseInt(average);
    }
}
console.log((allSubScore / allGrade).toFixed(6));