import java.util.*;
class Solution {
    public int solution(int n) {
        String base3 = Integer.toString(n, 3);
        StringBuilder sb = new StringBuilder();
        Deque<Character> stack = new ArrayDeque<>();
        
        for (Character c : base3.toCharArray()) {
            stack.push(c);
        }
        
        while (!stack.isEmpty()) {
            sb.append(stack.pop());
        }
        System.out.println(sb);
        return Integer.parseInt(sb.toString(), 3);
    }
}