/*
We have a string S of lowercase letters, and an integer array shifts.

Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a'). 

For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

Return the final string after all such shifts to S are applied.

LeetCode: 848. Shifting Letters 
*/

var shiftingLetters = function(S, shifts) {
    const first = 97;
    const max = 26;
    let count = 0;
    let res = '';
    
    for(let i = 0; i < S.length; i++) {
        count += shifts[i];
    }
    
    for(let i = 0; i < S.length; i++) {
        const current = S.charCodeAt(i);
        const next = ((current - first) + count % max) % max + first;
        
        res += String.fromCharCode(next);
        
        count -= shifts[i];
    }
    
    return res;
};
shiftingLetters("ktmq",[10,26,8,2])