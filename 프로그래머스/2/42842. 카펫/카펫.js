function solution(brown, yellow) {
    let temp = brown / 2 - 1;
    for (let i = 1; i < brown / 2; i++) {
        if (temp >= (brown - temp * 2) / 2 + 2) {
            if ((temp - 2) * i === yellow) {
                return [temp, (brown - temp * 2) / 2 + 2];
            }
        }
        temp--;
    }
}