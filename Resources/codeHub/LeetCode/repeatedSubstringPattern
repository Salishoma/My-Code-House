/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

LeetCode: 459. Repeated Substring Pattern 
*/

var repeatedSubstringPattern = function(s) {
   let m = s.length;
   let n = 0;
   let seen = {};
   let str = "";
   let j = 0;
   for(let i = 0; i < m; i++){
        let str1 = "";
        if(!seen[s[i]]){
            seen[s[i]] = 1;
            str += s[i];
            n++
        }else{
            if(m % n === 0){
                str1 = str.repeat(m / n);
                if(str1 === s) return true;
            }
            str += s[i];
            n++
        }
    }
    return false;
};
repeatedSubstringPattern("abcabcabcabc")