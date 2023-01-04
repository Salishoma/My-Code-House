package com.oma;

public class Stairs {
    public static int climbStairs(int n) {
        if (n <= 3) {
            return n;
        }
        int first = 2;
        int second = 3;
        int sum = first + second;
        int j = 5;
        while (j <= n) {
            first = second;
            second = sum;
            sum = first + second;
            j += 1;
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(5));
    }
}
