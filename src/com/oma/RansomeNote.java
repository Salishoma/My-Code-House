package com.oma;

public class RansomeNote {
    public static boolean canConstruct(String ransomNote, String magazine) {
        int[] chars = new int[26];

        for (char c : magazine.toCharArray()) {
            chars[c - 'a'] += 1;
        }

        for (char c : ransomNote.toCharArray()) {
            if (chars[c - 'a'] == 0) {
                return false;
            }
            chars[c - 'a'] -= 1;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(canConstruct("a", "b"));
        System.out.println(canConstruct("aa", "ab"));
        System.out.println(canConstruct("aa", "aab"));
    }
}
