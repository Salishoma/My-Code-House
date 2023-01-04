/*
You have an initial power P, an initial score of 0 points, and a bag of tokens.

Each token can be used at most once, has a value token[i], and has potentially two ways to use it.

If we have at least token[i] power, we may play the token face up, losing token[i] power, and gaining 1 point.
If we have at least 1 point, we may play the token face down, gaining token[i] power, and losing 1 point.
Return the largest number of points we can have after playing any number of tokens.

LeetCode: 948. Bag of Tokens
*/

var bagOfTokensScore = function(tokens, P) {
    let token = tokens.sort((a, b) => b - a)
    let j = token.length - 1;
    let sum = P;
    let count = 0;
    let sum1 = token.reduce((a, b) => a + b, 0);
    if(P < token[j]) return 0;
    if(P >= sum1) return token.length;
    for(let i = 0; i < j; i++){
        count -= 1;
        sum += token[i]
        while(sum >= token[j]){
            sum -= token[j];
            count++;
            j--;
        }
    }
    return count;
};
bagOfTokensScore([71,55,82],54)