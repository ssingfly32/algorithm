function solution(park, routes) {
    let curLoc;
    
    // 시작 위치 찾아서 현재 위치 설정
    for (const [i, space] of park.entries()) {
        const startSpace = space.indexOf('S');
        if (startSpace > -1) {
            curLoc = [i, startSpace];  
            break;            
        }
    }
    
    // 명령 반복문
    for (const route of routes) {
        const [direction, number] = route.split(' ');
        const num = Number(number);
        let nextLoc;
        if (direction === 'E') {
            nextLoc = [curLoc[0], curLoc[1] + num];
            if (nextLoc[1] < park[0].length) {
                let temp = 0;
                while (temp < num) {
                    if (park[curLoc[0]][curLoc[1] + ++temp] === 'X') break; 
                    if (temp === num) curLoc = nextLoc;
                }
            }
        } else if (direction === 'W') {
            nextLoc = [curLoc[0], curLoc[1] - num];
            if (nextLoc[1] > -1) {
                let temp = 0;
                while (temp < num) {
                    if (park[curLoc[0]][curLoc[1] - ++temp] === 'X') break; 
                    if (temp === num) curLoc = nextLoc;
                }
            } 
        } else if (direction === 'S') {
            nextLoc = [curLoc[0] + num, curLoc[1]];
            if (nextLoc[0] < park.length) {
                let temp = 0;
                while (temp < num) {
                    if (park[curLoc[0] + ++temp][curLoc[1]] === 'X') break; 
                    if (temp === num) curLoc = nextLoc;
                }
            } 
        } else {
            nextLoc = [curLoc[0] - num, curLoc[1]];
            if (nextLoc[0] > -1) {
                let temp = 0;
                while (temp < num) {
                    if (park[curLoc[0] - ++temp][curLoc[1]] === 'X') break; 
                    if (temp === num) curLoc = nextLoc;
                }
            } 
        }
    }
    return curLoc;
}
