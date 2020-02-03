/*
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

LeetCode: 692. Top K Frequent Words;
*/

var topKFrequent = function(words, k) {
    let map = new Map();
    for(let i = 0; i < words.length; i++){
        if(map.has(words[i])) map.set(words[i], map.get(words[i]) + 1);
        else map.set(words[i], 1);
    }
    const sortWords = (a, b) =>{
       return map.get(a) === map.get(b)? a.localeCompare(b) : map.get(b) - map.get(a);
    }
    return Array.from(map.keys()).sort(sortWords).slice(0, k)
};
topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)