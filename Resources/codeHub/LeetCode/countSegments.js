/*
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

LeetCode: 434. Number of Segments in a String
*/

var countSegments = function(s) {
   s = s.trim();
   if(s.length === 0) return 0
   let count = 0;
   for(let i = 0; i < s.length; i++){
      if(s[i] !== " " && s[i + 1] === " ") count++;
   }
       return count + 1;
};
countSegments("Hello, my name is John")