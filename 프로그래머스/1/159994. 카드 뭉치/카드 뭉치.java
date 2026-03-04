class Solution {
    public String solution(String[] cards1, String[] cards2, String[] goal) {           
        int curIdx1 = 0;
        int curIdx2 = 0;
        for (String target : goal) {
            if (curIdx1 < cards1.length && target.equals(cards1[curIdx1])) {
                curIdx1++;
            } else if (curIdx2 < cards2.length && target.equals(cards2[curIdx2])) {
                curIdx2++;
            } else {
                return "No";
            }
        }
        return "Yes";
    }
    
}