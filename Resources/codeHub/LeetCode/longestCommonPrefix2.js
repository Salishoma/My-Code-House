/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

LeetCode: 14. Longest Common Prefix
*/

var longestCommonPrefix = function(strs) {
   if(strs.length === 0) return "";
   if(strs.length === 1) return strs[0];
   let s = "";
   let j = 0;
   let min = strs[0].length;
   for(let i = 1; i < strs.length; i++){
       let str = strs[0].charAt(j);
       if(str !== strs[i][j]) break;
       if(i === strs.length - 1){
           s += str;
           j++;
           i = 0;
       }       
   }
   return s;
}
longestCommonPrefix(["flower","flow","float"])