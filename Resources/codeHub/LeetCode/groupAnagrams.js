/*
Given an array of strings, group anagrams together.

LeetCode: 49. Group Anagrams
*/

var groupAnagrams = function(strs) {
   let arr = [], set = {}, j = 0, s;
   for(let i = 0; i < strs.length; i++){
       s = strs[i].split('').sort().join('');
       if(!set[s]){
           set[s] = j + 1;
           arr[set[s] - 1] = []
           arr[set[s] - 1][0] = strs[i];
           j++;
       }else{
           arr[set[s] - 1].push(strs[i])
       }
   }
    return arr;
}
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])