/*
Given an array of strings, group anagrams together.

LeetCode: 49. Group Anagrams
*/

const primes = [2, 3, 5, 7, 11 ,13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 107];

function getKey(str) {
    let key = 1;
    for(let i = 0; i < str.length; i++){
        key *= primes[str.charCodeAt(i) - 97];
    }
    return key;
}



function groupAnagrams(strs) {
    var map = new Map();
    var arr, i, k;

    for (i = 0; i < strs.length; i++) {
        k = getKey(strs[i]);
        arr = map.get(k);
        if (arr === undefined)
            map.set(k, [strs[i]]);
        else
            arr.push(strs[i]);
    }

    return [...map.values()];
};
groupAnagrams(["ray","cod", "wap","abe","ned","arc","jar","doc","owl","pop","paw","sky"])
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])