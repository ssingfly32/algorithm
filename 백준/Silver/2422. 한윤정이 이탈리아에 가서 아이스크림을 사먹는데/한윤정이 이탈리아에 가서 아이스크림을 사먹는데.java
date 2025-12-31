import java.io.*;
import java.util.*;

public class Main {
    static int N;   // 아이스크림 종류의 수
    static int M;   // 섞어먹으면 안 되는 조합의 개수
    static int MAX = 3;
    static boolean[][] bad;
    static int count;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        bad = new boolean[N + 1][N + 1];
        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int a =  Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            bad[a][b] = true;
            bad[b][a] = true;
        }

        dfs(1, new ArrayList<>());
        System.out.println(count);
    }

    public static void dfs(int start, List<Integer> selected) {
        if (selected.size() == MAX) {
            count++;
            return;
        }
        for (int i = start; i <= N; i++) {
            boolean canSelect = true;
            for (int prev : selected) {
                if (bad[i][prev]) {
                    canSelect = false;
                    break;
                }
            }

            if (canSelect) {
                selected.add(i);
                dfs(i + 1, selected);
                selected.remove(selected.size() - 1);
            }
        }
    }
}

