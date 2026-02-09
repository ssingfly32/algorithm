import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        Deque<Integer> stack = new ArrayDeque<>();
        
        for (int num : arr) {
            if (stack.isEmpty() || stack.peek() != num) {
                stack.push(num);
            }
        }
        int[] answer = new int[stack.size()];
        int i = stack.size() - 1;
        for (int num : stack) {
            answer[i--] = num;
        }
        return answer;
    }
}