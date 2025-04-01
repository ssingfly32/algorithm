import java.util.*;

class Solution {
    public int[][] solution(int[][] data, String ext, int val_ext, String sort_by) {
        Map<String, Integer> map = Map.of(
            "code", 0,
            "date", 1,
            "maximum", 2,
            "remain", 3
        );

        int extIndex = map.get(ext);
        int sortIndex = map.get(sort_by);

        List<int[]> filteredList = new ArrayList<>();
        for (int[] row : data) {
            if (row[extIndex] < val_ext) {
                filteredList.add(row);
            }
        }

        filteredList.sort(Comparator.comparingInt(row -> row[sortIndex]));

        return filteredList.toArray(new int[0][]);
    }
}
