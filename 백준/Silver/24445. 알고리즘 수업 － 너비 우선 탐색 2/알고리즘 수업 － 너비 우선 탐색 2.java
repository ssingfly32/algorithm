import java.io.*;
import java.util.*;

public class Main {
    static ArrayList<Integer>[] graph;
    static int visitCount = 0;
    static int[] visitOrder;

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

        bfs(r);

        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= n; i++) {
            sb.append(visitOrder[i]).append('\n');
        }
        System.out.print(sb);
    }

    public static void bfs(int r) {
        visitOrder[r] = ++visitCount;
        Queue<Integer> queue = new ArrayDeque<>();
        queue.offer(r);

        while (!queue.isEmpty()) {
            int cur = queue.poll();

            for (int next : graph[cur]) {
                if (visitOrder[next] == 0) {
                    visitOrder[next] = ++visitCount;
                    queue.offer(next);
                }
            }
        }
    }
}
