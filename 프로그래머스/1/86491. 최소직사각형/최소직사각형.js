function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    for (const [width, height] of sizes) {
        if (maxW < width) maxW = width;
        if (maxH < height) maxH = height;
    }
    if (maxW > maxH) {
        const temp = sizes.map(v => v[0] < v[1] ? [v[1], v[0]] : v).sort((a, b) => b[1] - a[1]);
        return maxW * temp[0][1]
    } else {
        const temp = sizes.map(v => v[1] < maxH && v[1] < v[0] ? [v[1], v[0]] : v).sort((a, b) => b[0] - a[0]);
        return maxH * temp[0][0];
    
    }
}