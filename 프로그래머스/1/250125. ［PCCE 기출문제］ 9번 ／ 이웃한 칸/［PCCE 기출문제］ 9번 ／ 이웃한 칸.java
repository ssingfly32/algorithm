import java.util.Arrays;
class Solution {
    public int solution(String[][] board, int h, int w) {
        int answer = 0;
        int[] dh = {0, 1, -1, 0};
        int[] dw = {1, 0, 0, -1};
        for (int i = 0; i < 4; i++) {
            int target_h = h + dh[i];
            int target_w = w + dw[i];
            if (target_h < 0 || target_h >= board.length || target_w < 0 || target_w >= board[0].length) {
                continue;
            }
            if (board[h][w].equals(board[target_h][target_w])) {
                answer++;
            }
        }
        return answer;
    }
}