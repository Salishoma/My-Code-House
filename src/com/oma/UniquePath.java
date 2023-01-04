package com.oma;

import java.util.HashMap;
import java.util.Map;

public class UniquePath {
    public static int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int l = obstacleGrid.length;
        int b = obstacleGrid[0].length;
        Map<String, Integer> map = new HashMap<>();
        if (obstacleGrid[0][0] == 1 || obstacleGrid[l - 1][b - 1] == 1) {
            return 0;
        }
        return uniquePaths(obstacleGrid, 0, 0, b, l, map);
    }

    public static int uniquePaths(int[][] obstacleGrid, int x, int y, int b, int l, Map<String, Integer> map) {
        if (x == b - 1 && y == l - 1) {
            return 1;
        }
        if (map.containsKey(x + "#" + y)) {
            return map.get(x + "#" + y);
        }
        int sum = 0;
        if (x + 1 >= b) {
            if (obstacleGrid[y + 1][x] == 0) {
                sum = uniquePaths(obstacleGrid, x, y + 1, b, l, map);
            }
        } else if (y + 1 >= l) {
            if (obstacleGrid[y][x + 1] == 0) {
                sum = uniquePaths(obstacleGrid, x + 1, y, b, l, map);
            }
        } else if (obstacleGrid[y + 1][x] == 1 && obstacleGrid[y][x + 1] == 1) {
            return 0;
        } else if (obstacleGrid[y + 1][x] == 1) {
            sum = uniquePaths(obstacleGrid, x + 1, y, b, l, map);
        } else if (obstacleGrid[y][x + 1] == 1) {
            sum = uniquePaths(obstacleGrid, x, y + 1, b, l, map);
        } else {
            sum = uniquePaths(obstacleGrid, x + 1, y, b, l, map) + uniquePaths(obstacleGrid, x, y + 1, b, l, map);
        }
        map.put(x + "#" + y, sum);
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(uniquePathsWithObstacles(new int[][]{{0,0,0},{0,1,0},{0,0,0}}));
//        System.out.println(uniquePathsWithObstacles(new int[][]{{0,0},{1,0}}));
    }
}
