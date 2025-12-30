import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine();
        int colonCount = 0;
        int underScoreCount = 0;
        
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (c == ':') {
                colonCount++;
            } else if (c == '_') {
                underScoreCount++;
            }
        }
        System.out.println(str.length() + colonCount + underScoreCount * 5);
    }
}
