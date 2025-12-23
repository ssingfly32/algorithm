import java.io.*;
import java.util.*;

public class Main {
    static final int INF = 987654321;
    static final int UND = -1;
    static List<Integer> memo;

    public static int f(int x) {
        if (x == 1) return 0;

        if (memo.get(x) != UND) {
            return memo.get(x);
        }

        int result = INF;

        if (x % 3 == 0) {
            result = Math.min(f(x / 3), result);
        }
        if (x % 2 == 0) {
            result = Math.min(f(x / 2), result);
        }
        memo.set(x, Math.min(f(x - 1), result) + 1);
        return memo.get(x);
    }
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int x = Integer.parseInt(bufferedReader.readLine());
        memo = new ArrayList<>(Collections.nCopies(x + 1, UND));
        int result = f(x);
        System.out.println(result);
    }
}
