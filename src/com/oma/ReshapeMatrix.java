package com.oma;

import java.util.ArrayList;
import java.util.Arrays;

public class ReshapeMatrix {
    public static int[][] matrixReshape(int[][] mat, int r, int c) {
        int l = mat.length;
        int b = mat[0].length;
        new ArrayList<>(new ArrayList<>(Arrays.asList(1)));
        if (l * b != r * c) {
            return mat;
        }
        int[][] res = new int[r][c];
        int k = 0;
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                res[i][j] = mat[k/b][k%b];
                k += 1;
            }
        }
        return res;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(matrixReshape(new int[][]{{1,2},{3,4}}, 1, 4)));
        System.out.println(Arrays.deepToString(matrixReshape(new int[][]{{1,2},{3,4}}, 2, 4)));
    }
}
