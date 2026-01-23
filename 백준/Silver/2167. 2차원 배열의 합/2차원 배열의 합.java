import java.io.*;
import java.util.*;

public class Main {
    static int[][] arr;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        arr = new int[N + 1][M + 1];

        for (int i = 1; i <= N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 1; j <= M; j++) {
                int value = Integer.parseInt(st.nextToken());
                arr[i][j] = arr[i - 1][j]
                        + arr[i][j - 1]
                        - arr[i - 1][j - 1]
                        + value;
            }
        }

        int K = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < K; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int c = Integer.parseInt(st.nextToken());
            int d = Integer.parseInt(st.nextToken());
            
            int result = arr[c][d]
                    - arr[a - 1][d]
                    - arr[c][b - 1]
                    + arr[a - 1][b - 1];
            
            sb.append(result).append("\n");
        }
        System.out.println(sb);
    }
}