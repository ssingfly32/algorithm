function solution(s) {
    function binaryConv (count, zero, string) {
        if (string === '1') return [count, zero];
        const removedZeroStr = string.replaceAll('0','');
        const totalRemovedZero = zero += (string.length - removedZeroStr.length);
        return binaryConv(++count, totalRemovedZero, removedZeroStr.length.toString(2));
    };
    return binaryConv(0, 0, s);
}


