package com.oma;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Merge {

    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(mergeArrays(new int[][]{{1, 2}, {2, 3}, {4, 5}}, new int[][]{{1, 4}, {3, 2}, {4, 1}})));
    }

    /*
        You are given two 2D integer arrays nums1 and nums2.

        nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
        nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
        Each array contains unique ids and is sorted in ascending order by id.

        Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

        Only ids that appear in at least one of the two arrays should be included in the resulting array.
        Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays then its value in that array is considered to be 0.
        Return the resulting array. The returned array must be sorted in ascending order by id.
    * */

    public static int[][] mergeArrays(int[][] nums1, int[][] nums2) {
        int i = 0; int j = 0;
        List<int[]> list = new ArrayList<>();

        while (i < nums1.length && j < nums2.length) {
            int sum;
            int ind;
            if (nums1[i][0] < nums2[j][0]) {
                ind = nums1[i][0];
                sum = nums1[i++][1];
            } else if (nums1[i][0] > nums2[j][0]) {
                ind = nums2[j][0];
                sum = nums2[j++][1];
            } else {
                ind = nums1[i][0];
                sum = nums1[i++][1] + nums2[j++][1];
            }
            list.add(new int[]{ind, sum});
        }

        while (i < nums1.length) {
            list.add(new int[]{nums1[i][0], nums1[i++][1]});
        }

        while (j < nums2.length) {
            list.add(new int[]{nums2[j][0], nums2[j++][1]});
        }
        return list.toArray(new int[list.size()][2]);
    }
}
