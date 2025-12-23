import java.io.*;
import java.util.*;

public class Main {
    static int N, M;
    static List<Integer> arr;
    static List<Integer> result;

    public static void dfs(int n, int m) {
        if (m == M) {
            for (int value : result) {
                System.out.print(value + " ");
            }
            System.out.println();
        }

        if (n < N && m < M) {
            result.add(arr.get(n));
            dfs(n + 1, m + 1);
            result.remove(result.size() - 1);
            dfs(n + 1, m);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        arr = new ArrayList<>();
        for (int i = 1; i <= N; i++) {
            arr.add(i);
        }

        result = new ArrayList<>();

        dfs(0, 0);
    }
}
