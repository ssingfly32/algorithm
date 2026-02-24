class Solution {
    public String solution(int[] food) {
        StringBuilder sb = new StringBuilder();
        
        for (int i = 1; i < food.length; i++) {
            int cnt = food[i] / 2;
            sb.append(String.valueOf(i).repeat(cnt));
        }
        
        String reversed = new StringBuilder(sb).reverse().toString();
        return sb.append("0").append(reversed).toString();
    }
}