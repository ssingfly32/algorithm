import java.util.*;
class Solution {
    static final Map<String, Integer> MAP = Map.of(
        "zero", 0, "one", 1, "two", 2, "three", 3, "four", 4,
        "five", 5, "six", 6, "seven", 7, "eight", 8, "nine", 9
    );
    public int solution(String s) {
        StringBuilder word = new StringBuilder();
        StringBuilder answer = new StringBuilder();
        
        for (char c : s.toCharArray()) {
            if (!Character.isDigit(c)) {
                word.append(c);
                
                // 단어 검사
                String key = word.toString();
                if (MAP.containsKey(key)) {
                    answer.append(MAP.get(key));
                    word.setLength(0);
                };
            } else {
                answer.append(c);
            }
        }                                                                     return Integer.valueOf(answer.toString());
    }
}