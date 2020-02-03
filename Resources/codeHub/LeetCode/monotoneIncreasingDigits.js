/*
Given a non-negative integer N, find the largest number that is less than or equal to N with monotone increasing digits.

(Recall that an integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.)

LeetCode: 738. Monotone Increasing Digits
*/

var monotoneIncreasingDigits = function(N) {
    N = N.toString();
    let n =N.split('');
    let index = -1;
    for(let i = 0; i < n.length - 1; i++){
        if(n[i] > n[i + 1]){
            index = i + 1;
            break;
        }
    }
    for(let i = index - 1; i >= 0; i--){
        if(N[i] === N[i - 1]){
            n[i] = "9";
        }else{
            n[i] = n[i] - 1;
            break;
        }
    }
    if(index !== -1){
        for(let i = index; i < n.length; i++){
            n[i] = "9";
        }
    }
    if(n[0] === 0) n.shift();
    return parseInt(n.join(''))
};
monotoneIncreasingDigits(1234)