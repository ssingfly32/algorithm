import java.io.*;
import java.util.*;

public class Main {
    static ArrayList<Integer>[] graph;
    static int visitCount = 0;
    static boolean[] visited;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;

        int n = Integer.parseInt(br.readLine());
        int m = Integer.parseInt(br.readLine());

        graph = new ArrayList[n + 1];

        for (int i = 1; i <= n; i++) {
            graph[i]= new ArrayList<>();
        }

        for (int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            graph[a].add(b);
            graph[b].add(a);
        }

        visited = new boolean[n + 1];

        dfs(1);

        System.out.println(visitCount - 1);
    }

    public static void dfs(int vertex) {
        visited[vertex] = true;
        visitCount++;

        for (int next : graph[vertex]) {
            if (!visited[next]) {
                dfs(next);
            }
        }
    }
}
