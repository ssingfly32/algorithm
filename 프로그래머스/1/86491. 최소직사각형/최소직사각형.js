function solution(sizes) {
    const temp = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    let maxW = 0;
    let maxH = 0;
    for (const [w, h] of temp) {
        if (maxW < w) maxW = w;
        if (maxH < h) maxH = h;
    }
    return maxW * maxH;
}