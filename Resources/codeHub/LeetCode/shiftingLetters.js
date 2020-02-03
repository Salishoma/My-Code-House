/*
We have a string S of lowercase letters, and an integer array shifts.

Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a'). 

For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

Return the final string after all such shifts to S are applied.

LeetCode: 848. Shifting Letters 
*/

var shiftingLetters = function(S, shifts) {
    let arr = [];
    let sum = shifts.reduce((a, b) => a + b, 0);
    let j = 1;
    for(let i = 0; i < S.length; i++){
        let code = S[i].charCodeAt(0) - 97;
        arr.push(code);
    }
    arr[0] += sum;
    arr[0] = arr[0] % 26
    let sum1 = 0;
    for(let i = 0; i < shifts.length - 1; i++){
        sum1 += shifts[i];
        arr[j] += (sum - sum1);
        arr[j] = arr[j] % 26
        j++;
    }
    for(let i = 0; i < S.length; i++){
        arr[i] = String.fromCharCode(arr[i] + 97);
    }
    return arr.join('')
};
shiftingLetters("abc", [3,5,9])
shiftingLetters("ruu",[26,9,17])