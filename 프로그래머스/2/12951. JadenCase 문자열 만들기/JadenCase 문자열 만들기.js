function solution(s) {
    const arr = s.split(' ');
    for (const [index, str] of arr.entries()) {
        const transformedStr = [...str].map((v, i) => !i && isNaN(v) ? v.toUpperCase() : v.toLowerCase());
        arr[index] = transformedStr.join('');
    }
    return arr.join(' ');
}