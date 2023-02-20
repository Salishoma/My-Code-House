package com.oma;

public class Concatenation {

    /**
     * You are given a 0-indexed integer array nums.
     *
     * The concatenation of two numbers is the number formed by concatenating their numerals.
     *
     * For example, the concatenation of 15, 49 is 1549.
     * The concatenation value of nums is initially equal to 0. Perform this operation until nums becomes empty:
     *
     * If there exists more than one number in nums, pick the first element and last element in nums respectively and add the value of their concatenation to the concatenation value of nums, then delete the first and last element from nums.
     * If one element exists, add its value to the concatenation value of nums, then delete it.
     * Return the concatenation value of the nums.
     * */

    public static void main(String[] args) {
        System.out.println(findTheArrayConcVal(new int[]{5,14,13,8,12}));
    }
    public static long findTheArrayConcVal(int[] nums) {
        int i = 0;
        int j = nums.length - 1;
        long res = 0;

        while (i < j) {
            res = res + (nums[i++] *  (long) Math.pow(10, Math.floor(Math.log10(nums[j])) + 1) + nums[j--]);
        }
        return res + (nums.length % 2 == 0 ? 0 : nums[i]);
    }
}
