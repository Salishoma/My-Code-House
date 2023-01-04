/*
Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

LeetCode: 306. Additive Number
*/

var isAdditiveNumber = function(num) {
    if(num.length < 3) return false;
    let str = "";
    let seen = true;
    for(let i = num.length - 1; i > 1; i--){
        str = `${num[i]}${str}`;
        if(num[i] === "0") continue;
        let s = str;
        let s2 = num[i - 1]
        for(let j = i - 2; j >= 0; j--){
            if(`${s2}`.startsWith("0") && s2.length > 1){
                s2 = `${num[j]}${s2}`  
                seen = false;
            } else if(parseInt(s) >= parseInt(s2)){
                let diff = s - s2;
                if(num.slice(0, j + 1).endsWith(diff)){
                    s = s2;
                    s2 = diff;
                    let ind = Math.floor(Math.log10(diff));
                    ind = ind < 0 ? 0 : ind
                    j -= ind;
                    seen = true;
                }else {
                    s2 = `${num[j]}${s2}`
                    seen = false;
                }
            }else{
                seen = false;
                break;
            }
        }
        if(seen) return seen;
    }
    return seen;
};
isAdditiveNumber("199100199")
