function solution(s){
    var answer = true;
    const stack = [];
    for (const char of [...s]) {
        const len = stack.length;
        if (len && stack[len - 1] === '(' && char === ')') {
            stack.pop();
            continue;
        }
        stack.push(char);
    }

    return stack.length ? false : true;
}