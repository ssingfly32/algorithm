const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let grade = 'F';
if(input <= 100 && input >= 90) {
    grade = 'A';
} else if(input >= 80) {
    grade = 'B';
} else if(input >= 70) {
    grade = 'C';
} else if (input >= 60) {
    grade = 'D';
}
console.log(grade);