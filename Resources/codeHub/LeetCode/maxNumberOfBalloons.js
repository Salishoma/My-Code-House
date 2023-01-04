/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

LeetCode: 1189. Maximum Number of Balloons
*/
var maxNumberOfBalloons = function(text) {
    let seen = {"b": 0, "a": 0, "l": 0, "o": 0, "n": 0};
    for(let c of text){
        if(seen[c] || seen[c] === 0) seen[c]++
    }
    return Math.min(seen["b"], seen["a"], Math.floor(seen["l"] / 2), Math.floor(seen["o"] / 2), seen["n"]);
};

maxNumberOfBalloons("loonbalxballpoon")