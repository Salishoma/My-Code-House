/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

LeetCode: 728. Self Dividing Numbers
*/
var selfDividingNumbers = function(left, right) {
    let arr = [];
    for(let i = left; i <= right; i++){
        let n = i;
        while(n > 0){
            let d = n % 10;
            if(i % d === 0){
                n = Math.floor(n / 10);
            }else break;
        }
        if(n === 0) arr.push(i);
    }
    return arr
};
selfDividingNumbers(1, 22)