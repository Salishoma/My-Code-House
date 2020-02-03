/*
Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

LeetCode: 744. Find Smallest Letter Greater Than Target
*/

var nextGreatestLetter = function(letters, target) {
    for(let i = 0; i < letters.length; i++){
        if(target < letters[i]) return letters[i];
    }
    return letters[0]
};
nextGreatestLetter(["c", "f", "j"])