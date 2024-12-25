function solution(dirs) {
    let curDir = [5, 5];
    let destination = [];
    const movementRoute = new Set();
    for (const dir of dirs) {
        switch (dir) {
            case 'U':
                destination = [curDir[0], curDir[1] + 1];
                break;
            case 'D':
                destination = [curDir[0], curDir[1] - 1];
                break;
            case 'R':
                destination = [curDir[0] + 1, curDir[1]];
                break;
            case 'L':
                destination = [curDir[0] - 1, curDir[1]];
                break;    
        }
        if (checkValid(destination)) {
            movementRoute.add(`${curDir[0]}${curDir[1]}${destination[0]}${destination[1]}`);
            movementRoute.add(`${destination[0]}${destination[1]}${curDir[0]}${curDir[1]}`);
            curDir = destination;
        };
    }
    return movementRoute.size / 2;
}

function checkValid(destination) {
    return destination.every(v => v >= 0 && v <= 10);
}