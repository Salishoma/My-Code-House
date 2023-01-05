package com.oma;

import java.util.Arrays;

/*
* Given two positive integers left and right, find the two integers num1 and num2 such that:

left <= nums1 < nums2 <= right .
nums1 and nums2 are both prime numbers.
nums2 - nums1 is the minimum amongst all other pairs satisfying the above conditions.
Return the positive integer array ans = [nums1, nums2]. If there are multiple pairs satisfying these conditions, return the one with the minimum nums1 value or [-1, -1] if such numbers do not exist.

A number greater than 1 is called prime if it is only divisible by 1 and itself.



Example 1:

Input: left = 10, right = 19
Output: [11,13]
Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
Since 11 is smaller than 17, we return the first pair.
Example 2:

Input: left = 4, right = 6
Output: [-1,-1]
Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.


Constraints:

1 <= left <= right <= 106

* */

class Prime {

    public static void main(String[] args) {
        System.out.println(Arrays.toString(closestPrimes(10, 19)));
    }
    public static int[] closestPrimes(int left, int right) {
        int first = -1;
        int second = -1;
        boolean [] primes = new boolean[right + 1];

        for (int i = 2; i <= right; i++) {
            primes[i] = true;
        }

        for (int i = 2; i * i <= right; i++) {
            if (primes[i]) {
                for (int j = i * i; j <= right; j += i) {
                    primes[j] = false;
                }
            }
        }

        int last = -1;
        for (int i = left; i <= right; i++) {
            if (!primes[i]) {
                continue;
            }
            if (first == -1) {
                first = i;
            } else if (second == -1) {
                second = i;
            } else if (i - last < second - first) {
                first = last;
                second = i;
            }
            last = i;
        }

        return first > -1 && second > -1 ? new int[]{first, second} :
                new int[]{-1, -1};
    }
}
