/*
We are given two arrays A and B of words.  Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  For example, "wrr" is a subset of "warrior", but is not a subset of "world".

Now say a word a from A is universal if for every b in B, b is a subset of a. 

Return a list of all universal words in A.  You can return the words in any order.

LeetCode: 916. Word Subsets
*/

var wordSubsets = function(A, B) {
    const arr = [];
    const map = new Map();
    for(let letters of B){
        const count = {};
        for(let b of letters){
            count[b] = (count[b] || 0) + 1;
            if(!map.has(b)){
                map.set(b, 1)
            }else if(count[b] > map.get(b)){
                map.set(b, count[b])
            }
        }
    }
    for(let letters of A){
        const map2 = new Map(map);
        for(let a of letters){
            if(map2.has(a)){
                map2.set(a, map2.get(a) - 1);
                if(map2.get(a) === 0) map2.delete(a);
            }
            if(map2.size === 0){
                arr.push(letters);
                break;
            }
        }
    }

    return arr;
};
wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","o"])