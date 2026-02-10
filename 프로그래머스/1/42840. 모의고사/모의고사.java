import java.util.*;
class Solution {
    public int[] solution(int[] answers) {
        int[][] patterns = {
            {1,2,3,4,5},
            {2,1,2,3,2,4,2,5},
            {3,3,1,1,2,2,4,4,5,5}
        };

        int[] score = new int[3];

        for (int i = 0; i < answers.length; i++) {
            for (int p = 0; p < 3; p++) {
                if (answers[i] == patterns[p][i % patterns[p].length]) {
                    score[p]++;
                }
            }
        }

        int max = Math.max(score[0], Math.max(score[1], score[2]));

        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            if (score[i] == max) result.add(i + 1);
        }

        return result.stream().mapToInt(i -> i).toArray();
    }
}