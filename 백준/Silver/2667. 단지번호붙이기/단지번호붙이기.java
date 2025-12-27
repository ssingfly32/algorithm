import java.io.*;
import java.util.*;

public class Main {
    static int n;
    static boolean[][] visited;
    static int[][] map;
    static List<Integer> list = new ArrayList<>(); // 각 단지의 집 수
    static int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        n = Integer.parseInt(br.readLine());
        visited = new boolean[n][n];
        map = new int[n][n];

        for (int i = 0; i < n; i++) {
            String line = br.readLine();
            for (int j = 0; j < n; j++) {
                map[i][j] = line.charAt(j) - '0';
            }
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (!visited[i][j] && map[i][j] == 1) {
                    list.add(0);
                    dfs(i, j);
                }
            }
        }

        Collections.sort(list);
        StringBuilder sb = new StringBuilder();
        sb.append(list.size()).append("\n");
        for (int homeCount : list) {
            sb.append(homeCount).append("\n");
        }
        System.out.println(sb);
    }

    public static void dfs(int row, int col) {
        list.set(list.size() - 1, list.get(list.size() - 1) + 1);
        visited[row][col] = true;
        
        for (int[] dir : dirs) {
            int newRow = row + dir[0];
            int newCol = col + dir[1];

            if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n) {
                if (!visited[newRow][newCol] && map[newRow][newCol] == 1) {
                    dfs(newRow, newCol);
                }
            }
        }
    }
}
