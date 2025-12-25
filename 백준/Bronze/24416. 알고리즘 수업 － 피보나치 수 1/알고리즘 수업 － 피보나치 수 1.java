import java.io.*;

public class Main {
    static int recursionCnt = 0;
    static int dpCnt = 0;
    static int[] table;
    
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        int recursionResult = recursionF(n);

        table = new int[n + 1];
        int dpResult = dpF(n);

        System.out.println(recursionCnt + " " + dpCnt);
    }

    public static int recursionF(int n) {
        if (n == 1 || n == 2) {
            recursionCnt++;
            return 1;
        }
        return recursionF(n - 1) + recursionF(n - 2);
    }

    public static int dpF(int n) {
        table[1] = 1;
        table[2] = 1;
        for (int i = 3; i <= n; i++) {
            table[i] = table[i - 1] + table[i - 2];
            dpCnt++;
        }
        return table[n];
    }
}
