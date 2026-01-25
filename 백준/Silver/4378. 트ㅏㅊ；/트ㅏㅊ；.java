import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[][] keyboard = {
                {"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="},
                { "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"},
                { "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"},
                { "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"},
        };

        Map<Character, Character> map = new HashMap<>();
        for (String[] row : keyboard) {
            for (int i = 1; i < row.length; i++) {
                map.put(row[i].charAt(0), row[i - 1].charAt(0));
            }
        }

        String line;
        while ((line = br.readLine()) != null) {
            StringBuilder sb = new StringBuilder();
            for (char c : line.toCharArray()) {
                if (c == ' ') {
                    sb.append(" ");
                } else {
                    sb.append(map.getOrDefault(c, c));
                }
            }
            System.out.println(sb);
        }
    }
}