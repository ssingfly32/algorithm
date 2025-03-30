class Solution {
    public int solution(int[] wallet, int[] bill) {
        int answer = 0;
        int w_min = Math.min(wallet[0], wallet[1]);
        int w_max = Math.max(wallet[0], wallet[1]);
        int bill_min = Math.min(bill[0], bill[1]);
        int bill_max = Math.max(bill[0], bill[1]);
        
        while (true) {
            if (bill_min > w_min || bill_max > w_max) {
                bill_max /= 2;
                answer++;
            }
            
            if (bill_max < bill_min) {
                int temp = bill_max;
                bill_max = bill_min;
                bill_min = temp;
            }
            
            if (bill_max <= w_max && bill_min <= w_min) {
                break;
            }
        }
        return answer;
    }
}