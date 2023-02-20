package com.oma;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Decompress {

    public static void main(String[] args) {
        System.out.println(Arrays.toString(decompressRLElist(new int[]{1, 2, 3, 4})));
    }
    /**
     * We are given a list nums of integers representing a list compressed with run-length encoding.
     *
     * Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.
     *
     * Return the decompressed list.
     * @param nums
     * @return
     */
    public static int[] decompressRLElist(int[] nums) {
        List<Integer> decomp = new ArrayList<>();

        for (int i = 0; i < nums.length; i += 2) {
            for (int j = 1; j <= nums[i]; j++) {
                decomp.add(nums[i + 1]);
            }
        }

        int[] res = new int[decomp.size()];

        for (int i = 0; i < decomp.size(); i++) {
            res[i] = decomp.get(i);
        }

        return res;
    }
}
