import java.util.*;
class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        int answerIdx = 0;
        
        for (int[] command : commands) {
            int start = command[0] - 1;
            int end = command[1] - 1;
            int k = command[2] - 1;
            int[] temp = new int[end - start + 1];
            int tempIdx = 0;
            
            for (int i = start; i <= end; i++) {
                temp[tempIdx++] = array[i];
            }
            
            Arrays.sort(temp);
            answer[answerIdx++] = temp[k];
        }
        return answer;
    }
}