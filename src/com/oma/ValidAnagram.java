package com.oma;

public class ValidAnagram {
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        int count = 0;
        int[] anagram = new int[26];

        for (char c : s.toCharArray()) {
            anagram[c - 'a'] += 1;
            count += 1;
        }

        for (char c : t.toCharArray()) {
            if (anagram[c - 'a'] == 0) {
                return false;
            }
            anagram[c - 'a'] -= 1;
            count -= 1;
        }
        return count == 0;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram"));
        System.out.println(isAnagram("rat", "car"));
    }
}
