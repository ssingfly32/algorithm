import java.io.*;
import java.util.*;

public class Main {
    static class Balloon {
        int index;  // 풍선 번호
        int move;   // 이동할 칸 수

        Balloon(int index, int move) {
            this.index = index;
            this.move = move;
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(br.readLine());

        StringTokenizer st = new StringTokenizer(br.readLine());
        Deque<Balloon> deque = new ArrayDeque<>();

        // 풍선 정보 입력
        for (int i = 1; i <= n; i++) {
            deque.add(new Balloon(i, Integer.parseInt(st.nextToken())));
        }

        // 첫 번째 풍선 터뜨리기
        Balloon current = deque.pollFirst();
        sb.append(current.index).append(" ");

        while (!deque.isEmpty()) {
            int move = current.move;

            if (deque.size() == 1) {
                sb.append(deque.pollFirst().index);
                break;
            }

            if (move > 0) {
                // 양수: 오른쪽으로 이동
                for (int i = 0; i < move - 1; i++) {
                    deque.addLast(deque.pollFirst());
                }
                current = deque.pollFirst();
            } else {
                // 음수: 왼쪽으로 이동
                for (int i = 0; i < -move - 1; i++) {
                    deque.addFirst(deque.pollLast());
                }
                current = deque.pollLast();
            }
            sb.append(current.index).append(" ");
        }

        System.out.println(sb);
    }
}