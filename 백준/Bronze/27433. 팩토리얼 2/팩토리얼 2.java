import java.io.*;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        long answer = factorial(N);
        System.out.println(answer);
    }

    public static long factorial(int n){
        if (n == 1 || n == 0) return 1;
        return n * factorial(n - 1);
    }
}