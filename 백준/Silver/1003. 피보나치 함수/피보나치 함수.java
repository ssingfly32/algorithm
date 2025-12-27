import java.io.*;

public class Main {
    static int[][] table;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int n = Integer.parseInt(br.readLine());

        table = new int[41][2];
        table[0][0] = 1;
        table[0][1] = 0;
        table[1][0] = 0;
        table[1][1] = 1;

        for (int i = 2; i <= 40; i++) {
            table[i][0] = table[i - 1][0] + table[i - 2][0];
            table[i][1] = table[i - 1][1] + table[i - 2][1];
        }

        for (int i = 0; i < n; i++) {
            int number = Integer.parseInt(br.readLine());
            sb.append(table[number][0]).append(" ").append(table[number][1]).append("\n");
        }

        System.out.println(sb);
    }
}
