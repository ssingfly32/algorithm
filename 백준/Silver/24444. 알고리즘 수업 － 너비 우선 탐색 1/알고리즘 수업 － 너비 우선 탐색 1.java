import java.io.*;
import java.util.*;

public class Main {
    static ArrayList<Integer>[] graph;
    static int[] visited;
    static int visitOrder = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());
        int r = Integer.parseInt(st.nextToken());

        graph = new ArrayList[n + 1];
        // 우선 그래프 초기화
        for (int i = 1; i <= n; i++) {
            graph[i] = new ArrayList<>();
        }
        // 간선 입력
        for (int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            graph[a].add(b);
            graph[b].add(a);
        }

        // 정점 번호 작은 것부터 방문하기 위해 정렬
        for (int i = 1; i<= n; i++) {
            Collections.sort(graph[i]);
        }

        visited = new int[n + 1];

        bfs(r);

        for (int i = 1; i <= n; i++) {
            System.out.println(visited[i]);
        }
    }

    private static void bfs(int r) {
        visited[r] = ++visitOrder;
        Queue<Integer> queue = new ArrayDeque<>();
        queue.offer(r);

        while (!queue.isEmpty()) {
            int cur = queue.poll();

            for (int next : graph[cur]) {
                if (visited[next] == 0) {
                    visited[next] = ++visitOrder;
                    queue.offer(next);
                }
            }
        }
    }
}
