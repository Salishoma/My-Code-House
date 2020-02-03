/*
Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

LeetCode: 819. Most Common Word
*/

var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase();
    let map = new Map();
    let set = new Set(banned);
    let arr = paragraph.split(/\W+/);;
    let max = 0;
    let word;
    for(let i = 0; i < arr.length; i++){
        if(!set.has(arr[i])){
            map.set(arr[i], (map.get(arr[i]) || 0) + 1);
           if(map.get(arr[i]) > max){
               max = map.get(arr[i]);
               word = arr[i];
           }
        }
    }
    return word;
};
mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])