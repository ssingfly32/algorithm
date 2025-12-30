import java.io.*;
import java.util.*;

public class Main {

    static boolean[] blocked = new boolean[1_000_001];

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int T = Integer.parseInt(br.readLine());

        while (T-- > 0) {
            Arrays.fill(blocked, false);

            int n = Integer.parseInt(br.readLine());
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(br.readLine());
            }

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < i; j++) {
                    int diff = Math.abs(arr[i] - arr[j]);

                    int limit = (int)Math.sqrt(diff);
                    for (int k = 1; k <= limit; k++) {
                        if (diff % k == 0) {
                            blocked[k] = true;
                            blocked[diff / k] = true;
                        }
                    }
                }
            }

            for (int m = 1; m < blocked.length; m++) {
                if (!blocked[m]) {
                    sb.append(m).append('\n');
                    break;
                }
            }
        }
        System.out.print(sb);
    }
}