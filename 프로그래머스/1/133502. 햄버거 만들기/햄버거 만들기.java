import java.util.*;
class Solution {
    int[] order = {1, 2, 3, 1};
    public int solution(int[] ingredient) {
        int answer = 0;
        Stack<Integer> stack = new Stack<>();
        for (int el : ingredient) {
            stack.push(el);
            int size = stack.size();
            if (size >= 4) {
                if (stack.get(size - 4) == 1 && 
                    stack.get(size - 3) == 2 && 
                    stack.get(size - 2) == 3 && 
                    stack.get(size - 1) == 1) 
                {
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    answer++;
                }                                               
            }
        }
        return answer;
    }

}