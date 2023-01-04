package com.oma;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class LongestSquareStreak {

    public static void main(String[] args) {
//        System.out.println(longestSquareStreak(new int[]{4,3,6,16,8,2}));
        System.out.println(longestSquareStreak(new int[]{2,3,5,6,7}));
    }

    public static int longestSquareStreak(int[] nums) {
        int max = 0;
        for (int num : nums) {
            if (max < num) {
                max = num;
            }
        }

        int[] bucket = new int[max + 1];

        for (int num : nums) {
            bucket[num] = 1;
        }
        int res = -1;

        for (int i = 2; i < bucket.length; i++) {
            if (bucket[i] == 0) {
                continue;
            }
            int num = i * i;
            if (num >= 1 && num <= max && bucket[num] == 1) {
                bucket[num] = bucket[i] + 1;
            }
            if (res < bucket[i]) {
                res = bucket[i];
            }
        }
        return res > 1 ? res : -1;
    }
}
