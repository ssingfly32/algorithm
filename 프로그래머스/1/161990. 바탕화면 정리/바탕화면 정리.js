function solution(wallpaper) {
    const xCoordinates = [];
    let yCoordinates = [];
    for (const [index, item] of wallpaper.entries()) {
        for (let i = 0; i < item.length; i++) {
            if (item[i] === '#') {
                xCoordinates.push(index);
                yCoordinates.push(i);
            }
        }
    }
    yCoordinates = yCoordinates.sort((a, b) => a - b);
    return [xCoordinates[0], yCoordinates[0], xCoordinates[xCoordinates.length - 1] + 1, yCoordinates[yCoordinates.length - 1] + 1];
}