import java.util.*;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int[] counts = new int[n + 2];
        
        for (int i = 1; i <= n; i++) {
            counts[i] = 1;
        }
        
        for (int num : lost) {
            counts[num]--;
        }
        
        for (int num : reserve) {
            counts[num]++;
        }
        
        for (int i = 1; i <= n; i++) {
            if (counts[i] == 0) {
                if (counts[i - 1] > 1) {
                    counts[i - 1]--;
                    counts[i]++;
                } else if (counts[i + 1] > 1) {
                    counts[i + 1]--;
                    counts[i]++;
                }
            }
        }
        
        int answer = 0;
        for (int i = 1; i <= n; i++) {
            if (counts[i] > 0) answer++;   
        }
        return answer;
    }
}