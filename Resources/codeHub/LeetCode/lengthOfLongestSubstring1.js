/*
Given a string, find the length of the longest substring without repeating characters.

LeetCode: 3. Longest Substring Without Repeating Characters
*/

var lengthOfLongestSubstring = function(s) {    
    const map = new Map();
    let start = 0;
    let longest = 0;
    let currentLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        let duplicatedIndex = -1;
        
        if (map.has(letter)) {
            duplicatedIndex = map.get(letter);   
        }
            
        if (duplicatedIndex >= start) {
            start = duplicatedIndex + 1;
            currentLength = i - start + 1;
        } else {
            currentLength++;
        } 
        
        map.set(letter, i);
        if (currentLength > longest) {
            longest = currentLength;
        }
        // console.log(i, letter, currentLength, start);
    }
    return longest;
};
lengthOfLongestSubstring("abcabcbb")