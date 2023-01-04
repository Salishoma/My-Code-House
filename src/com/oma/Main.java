package com.oma;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Main {

    private static final int[] primes = new int[]{2, 3, 5, 7, 11 ,13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 107};
    public static void main(String[] args) {
	// write your code here
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        groupAnagrams(new String[]{"aa"});
    }

    public static List<List<String>> groupAnagrams(String[] strArr) {
        HashMap<Integer, List<String>> hashMap = new HashMap<>();

        for (String st : strArr) {
            int hash = calculateHash(st);
            List<String> list = hashMap.getOrDefault(hash, new ArrayList<>());
            list.add(st);
            hashMap.put(hash, list);
        }
        return new ArrayList<>(hashMap.values());
    }

    private static int calculateHash(String str) {
        int hash = 1;
        for (char c : str.toCharArray()) {
            hash *= primes[c - 'a' + 1];
        }
        return hash;
    }
}
