/*
You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. 

Please note that both secret number and friend's guess may contain duplicate digits.

LeetCode: 299. Bulls and Cows
*/

var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0
    let keepSecret = {};
    for(let i = 0; i < secret.length; i++){
        if(secret[i] === guess[i]) bulls++;
        else{
            if(keepSecret[secret[i]] === undefined) keepSecret[secret[i]] = 1;
            else keepSecret[secret[i]]++;
        }
    }
    for(let i = 0; i < secret.length; i++){
        if(keepSecret[guess[i]] > 0 && secret[i] !== guess[i]){
            keepSecret[guess[i]]--;
            cows++;
        }
    }
    return `${bulls}A${cows}B`;
};
getHint("1807", "7810")
getHint("1123", "0111")