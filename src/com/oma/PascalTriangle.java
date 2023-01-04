package com.oma;

import java.util.ArrayList;
import java.util.List;

public class PascalTriangle {
    public static List<List<Integer>> generate(int numRows) {

        List<List<Integer>> pascal = new ArrayList<>();
        List<Integer> first = new ArrayList<>();
        first.add(1);
        pascal.add(first);

        for (int i = 1; i < numRows; i++) {
            List<Integer> cur = new ArrayList<>();
            List<Integer> prev = pascal.get(i - 1);
            cur.add(1);
            for (int j = 1; j < prev.size(); j++) {
                cur.add(prev.get(j - 1) + prev.get(j));
            }
            cur.add(1);
            pascal.add(cur);
        }
        return pascal;
    }

    public static void main(String[] args) {
        System.out.println(generate(1));
    }
}
