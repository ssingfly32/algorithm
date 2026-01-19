import java.io.*;

public class Main {
    static final int MAX = 10000;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int[] totalCount = new int[MAX + 1];

        for (int i = 0; i < N; i++) {
            int number = Integer.parseInt(br.readLine());
            totalCount[number]++;
        }

        StringBuilder sb = new StringBuilder();

        for (int i = 1; i <= MAX; i++) {
            int count = totalCount[i];
            if (count == 0) continue;
            for (int j = 0; j < count; j++) sb.append(i).append("\n");
        }
        System.out.println(sb);
    }
}