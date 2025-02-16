function solution(today, terms, privacies) {
    const map = new Map();
    const answer = [];
    const transformedT = today.split('.').map(v => v.padStart(2, '0')).join('');
    
    terms.forEach(v => {
        const [key, value] = v.split(' ');
        map.set(key, Number(value));
    });

    for (let i = 0; i < privacies.length; i++) {
        const [date, term] = privacies[i].split(' ');
        let [year, month, day] = date.split('.').map(Number);
        
        month += map.get(term);
        year += Math.floor((month - 1) / 12);
        month = (month - 1) % 12 + 1;

        const privacyAdaptedDate = `${year}${String(month).padStart(2, '0')}${String(day).padStart(2, '0')}`;
        if (transformedT >= privacyAdaptedDate) {
            answer.push(i + 1);
        }
    }
    return answer;
}
