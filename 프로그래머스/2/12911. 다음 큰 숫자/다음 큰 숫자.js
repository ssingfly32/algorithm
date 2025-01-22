function solution(n) {
    const binaryN = n.toString(2).replaceAll('0', '');
    let nextN = n;
    function binaryConversion () {
        const binaryNextN = (++nextN).toString(2);
        if (binaryNextN.replaceAll('0', '') === binaryN) return nextN;
        return binaryConversion();
    }
    return binaryConversion();
}