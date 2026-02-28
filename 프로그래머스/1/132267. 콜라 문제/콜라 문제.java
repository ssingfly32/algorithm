class Solution {
    public int solution(int a, int b, int n) {
        int answer = 0;
        while (n >= a) {  
            int coke = n / a * b; // 받을 콜라 수
            answer += coke;
            n =  n % a + coke; // 빈 병 수
        }
        
        return answer;
    }
}