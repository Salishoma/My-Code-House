/*
Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.

LeetCode: 720. Longest Word in Dictionary
*/

var longestWord = function(words) {
    let set = new Set(words);
    let arr = [];
    let max = 0;
    for(let i = 0; i < words.length; i++){
        if(set.has(words[i].slice(0, words[i].length -1))){
            if(max < words[i].length){
                arr = [];
                max = words[i].length;
                arr.push(words[i]);
            }else if(max === words[i].length){
                arr.push(words[i]);
            }
        }
    }
    return arr[0];
};
longestWord(["w","wo","wor","worl", "world"])