/*
Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

LeetCode: 925. Long Pressed Name
*/

var isLongPressedName = function(name, typed) {
    let j = 0, n = typed.length;
    for(let i = 0; i < n; i++){
        if(name[j] === typed[i]){
            j++
        }else if(name[j - 1] === typed[i - 1] && typed[i] === typed[i - 1]){
            continue;     
        }else return false;
    }
    return j === name.length
};
isLongPressedName("leelee","leeelee")