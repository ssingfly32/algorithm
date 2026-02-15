import java.util.*;
class Solution {
    public int solution(int[][] sizes) {
        int maxWidth = 0;
        int maxHeight = 0;
        for (int[] size : sizes) {
            int max = Math.max(size[0], size[1]);
            int min = Math.min(size[0], size[1]);
            maxWidth = Math.max(maxWidth, max);
            maxHeight = Math.max(maxHeight, min);
        }
        return maxWidth * maxHeight;
    }
}