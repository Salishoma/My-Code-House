package com.oma;

public class MinimumPathSum {
    public static int minPathSum(int[][] grid) {
        int l = grid.length;
        int b = grid[0].length;
        int[][]dp = new int[l][b];
        dp[0][0] = grid[0][0];

        for (int i = 1; i < l; i++) {
            dp[i][0] = grid[i][0] + dp[i - 1][0];
        }
        for (int i = 1; i < b; i++) {
            dp[0][i] = grid[0][i] + dp[0][i - 1];
        }

        for (int i = 1; i < l; i++) {
            for (int j = 1; j < b; j++) {
                dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        return dp[l - 1][b - 1];
    }

    public static void main(String[] args) {
        System.out.println(minPathSum(new int[][]{{1,3,1},{1,5,1},{4,2,1}}));
        System.out.println(minPathSum(new int[][]{{1,2,3},{4,5,6}}));
    }
}
