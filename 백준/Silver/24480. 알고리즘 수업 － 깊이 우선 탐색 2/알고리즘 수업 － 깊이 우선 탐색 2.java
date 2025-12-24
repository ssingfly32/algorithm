import java.io.*;
import java.util.*;

public class Main {
    static ArrayList<Integer>[] graph;
    static int[] visitOrder;
    static int visitCount = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        int r = Integer.parseInt(st.nextToken());

        graph = new ArrayList[n + 1];

        for (int i = 1; i <= n; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            graph[a].add(b);
            graph[b].add(a);
        }

        for (int i = 1; i <= n; i++) {
            graph[i].sort(Comparator.reverseOrder());
        }

        visitOrder = new int[n + 1];
        Arrays.fill(visitOrder, 0);

        dfs(r);

        for (int i = 1; i <= n; i++) {
            System.out.println(visitOrder[i]);
        }
    }

    public static void dfs(int r) {
        visitOrder[r] = ++visitCount;

        for (int next : graph[r]) {
            if (visitOrder[next] == 0) {
                dfs(next);
            }
        }
    }
}
