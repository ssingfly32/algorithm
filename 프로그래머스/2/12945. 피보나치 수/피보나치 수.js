function solution(n) {
    let pre = 0; // F(0)
    let next = 1; // F(1)

    for (let i = 2; i <= n; i++) {
        const temp = (pre + next) % 1234567;
        pre = next;
        next = temp;
    }

    return next;
}
