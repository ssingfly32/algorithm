function solution(a, b) {
    const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const totalDay = monthDays.reduce((pre, cur, i) => pre + (i < a ? cur : 0), 0) + b;
    return days[(totalDay - 1) % 7];
}