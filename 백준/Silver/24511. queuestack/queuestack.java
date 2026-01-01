import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int N = Integer.parseInt(br.readLine());
        st = new StringTokenizer(br.readLine());

        int[] dataStructure = new int[N];
        for (int i = 0; i < N; i++) {
            dataStructure[i] = Integer.parseInt(st.nextToken());
        }

        int[] values = new int[N];
        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            values[i] = Integer.parseInt(st.nextToken());
        }

        Deque<Integer> q = new ArrayDeque<>();
        for (int i = N - 1; i >= 0; i--) {
            if (dataStructure[i] == 0) {
                q.addLast(values[i]);
            }
        }
        
        int M = Integer.parseInt(br.readLine());
        st = new StringTokenizer(br.readLine());
        
        int[] valuesToAdd =  new int[M];
        for (int i = 0; i < M; i++) {
            valuesToAdd[i] = Integer.parseInt(st.nextToken());
        }

        StringBuilder sb = new StringBuilder();
        for (int x : valuesToAdd) {
            if (q.isEmpty()) { // 모든 자료구조가 스택일 때
                sb.append(x).append(" ");
            } else {
                sb.append(q.pollFirst()).append(" ");
                q.addLast(x);
            }
        }
        System.out.println(sb);
    }
}