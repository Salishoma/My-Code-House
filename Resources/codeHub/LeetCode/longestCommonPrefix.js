/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

LeetCode: 14. Longest Common Prefix
*/

var longestCommonPrefix = function(strs) {
   if(strs.length === 0) return "";
   if(strs.length === 1) return strs[0];
   let str = "";
   let min = strs[0].length;
   for(let i = 0; i < min; i++){
       for(let j = 1; j < strs.length; j++){
           if(strs[0][i] !== strs[j][i]){
               str = strs[0].slice(0, i);
               return str;
           }
           str = strs[0].slice(0, i + 1);
           min = Math.min(strs[0].length, strs[j].length);
       }
   }
   return str;
}
longestCommonPrefix(["a"])