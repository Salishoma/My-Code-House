/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

LeetCode: 139. Word Break
*/

var wordBreak = function(s, wordDict, cache = {}) {
//     if (cache[s]) return false;
    cache[s] = true;
    for (var i = 0; i < wordDict.length; i++) {
        if (s === wordDict[i]) {
            return true;
        }
        if (s.startsWith(wordDict[i])) {
            if (wordBreak(s.substring(wordDict[i].length), wordDict, cache)) {
                return true;
            }
        }
    }
    return false;
};
wordBreak("leetcode", ["leet", "code"])
// wordBreak("", ["leet", "code"])