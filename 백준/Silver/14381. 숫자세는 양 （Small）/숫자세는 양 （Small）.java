import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();

        for (int i = 1; i <= T; i++) {
            Set<Character> set = new HashSet<>();
            int N = Integer.parseInt(br.readLine());
            if (N == 0) {
                sb.append("Case #").append(i).append(": INSOMNIA\n");
                continue;
            }

            int round = 1;
            int answer = N;

            while (set.size() < 10) {
                answer = round * N;
                String s = String.valueOf(answer);

                for (char c : s.toCharArray()) {
                    set.add(c);
                }
                round++;
            }
            sb.append("Case #").append(i).append(": ").append(answer).append("\n");
        }
        System.out.println(sb);
    }
}