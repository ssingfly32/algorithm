import java.util.*;
import java.util.stream.*;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int[] counts = new int[n + 1];
        Set<Integer> reserveSet = 
            Arrays.stream(reserve).boxed().collect(Collectors.toSet());
        Set<Integer> lostSet = 
            Arrays.stream(lost).boxed().collect(Collectors.toSet());
        
        for (int i = 1; i <= n; i++) {
            if (!lostSet.contains(i)) {
                counts[i] = 1;
            }
            if (reserveSet.contains(i)) {
                counts[i]++;
            }
        }
        
        for (int i = 1; i <= n; i++) {
            if (counts[i] == 0) {
                if (counts[i - 1] == 2) {
                    counts[i - 1]--;
                    counts[i]++;
                } else if (i < n && counts[i + 1] == 2) {
                    counts[i + 1]--;
                    counts[i]++;
                }
            }
        }
        
        int answer = 0;
        
        // 체육수업 들을 수 있는 학생 수 찾기
        for (int count : counts) {
            if (count > 0) answer++;
        }
        
        return answer;
    }
}