import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N, A, D;

        N = Integer.parseInt(st.nextToken());
        A = Integer.parseInt(st.nextToken());
        D = Integer.parseInt(st.nextToken());

        int answer = 0;
        int next = A;

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            int num = Integer.parseInt(st.nextToken());
            if (num == next) {
                next += D;
                answer++;
            }
        }
        System.out.println(answer);
    }
}