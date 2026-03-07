import java.util.*;
class Solution {
    public String[] solution(String[] strings, int n) {
        Arrays.sort(strings, (a, b) -> {
            int charCompare = Character.compare(a.charAt(n), b.charAt(n));
            if (charCompare == 0) return a.compareTo(b);
            return charCompare;
        });
        return strings;
    }
}