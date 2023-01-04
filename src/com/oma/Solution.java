package com.oma;

import java.util.ArrayList;
import java.util.List;

public class Solution {
    public static void main(String[] args) {
        System.out.println(appendCharacters("coaching", "coding"));
        System.out.println(subsets(new int[]{1,2,3}));
    }
    public static int appendCharacters(String s, String t) {
        int i = 0;
        int j = 0;
        while (i < s.length() && j < t.length()) {
            if (s.charAt(i) == t.charAt(j)) {
                i += 1;
                j += 1;
            } else {
                i += 1;
            }
        }
        return t.length() - j;
    }

    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        res.add(new ArrayList<>());
        for (int num : nums) {
            int k = res.size();
            for (int j = 0; j < k; j++) {
                List<Integer> temp = new ArrayList<>(res.get(j));
                temp.add(num);
                res.add(new ArrayList<>(temp));
            }
        }
        return res;
    }

}
