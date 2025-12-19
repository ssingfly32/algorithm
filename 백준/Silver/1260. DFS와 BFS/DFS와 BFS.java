import java.io.*;
import java.util.*;

public class Main {
    static int n, m, v;
    static ArrayList<Integer>[] graph;
    static boolean[] visited;

    public static void main(String[] args) throws IOException {
        // 방문 정점 여러 개인 경우 오름차순 방문
        // 정점 개수 n, 간선 개수 m, 시작 정점 v
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        v = Integer.parseInt(st.nextToken());

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

        visited = new boolean[n + 1];

        // dfs
        dfs(v);
        System.out.println();

        // bfs 전 visited 초기화
        Arrays.fill(visited, false);
        bfs(v);
    }

    private static void dfs(int v) {
        visited[v] = true;
        System.out.print(v + " ");

        for (int next : graph[v]) {
            if (!visited[next]) {
                dfs(next);
            }
        }
    }

    private static void bfs(int start) {
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(start);
        visited[start] = true;

        while (!queue.isEmpty()) {
            int cur = queue.poll();
            System.out.print(cur + " ");

            for (int next : graph[cur]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.offer(next);
                }
            }
        }
    }
}
