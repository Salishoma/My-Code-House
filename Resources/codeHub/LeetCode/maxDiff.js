/*
You are given an integer num. You will apply the following steps exactly two times:

Pick a digit x (0 <= x <= 9).
Pick another digit y (0 <= y <= 9). The digit y can be equal to x.
Replace all the occurrences of x in the decimal representation of num by y.
The new integer cannot have any leading zeros, also the new integer cannot be 0.
Let a and b be the results of applying the operations to num the first and second times, respectively.

Return the max difference between a and b.

LeetCode: 1432. Max Difference You Can Get From Changing an Integer
*/

var maxDiff = function(num) {
    if(num < 10) return 8;
    let s = num.toString()
    if(new Set(s).size === 1) return s.replace(s,"8".repeat(s.length));
    let str = s.split('');
    let str1 = [...str];
    let nine = Infinity;
    let one = Infinity;
    let zero = Infinity;
    let set = false;
    let first = str1[0];
    let res;
    for(let i = 0; i < 9; i++){
        if(str[i] !== "9" && !res){
            res = str[i];
            str[i] = "9";
        }else if(res === str[i]){
            str[i] = "9";
        }
    }
    if(str1[0] > 1){
        one = str1[0];
        str1[0] = "1";
    }
    for(let i = 0; i < str.length; i++){
        if(first === "1" && first !== str1[i] && str1[i] !== "0" && !set){
            zero = str1[i];
            str1[i] = "0";
            set = true;
        }
        else if(str1[i] === zero) str1[i] = "0"
        else if(str1[i] === one){
            str1[i] = "1";
        }else if(str1[i] === "1" && str1[0] === str1[i]){
            continue
        }
    }
    return str.join('') - str1.join('')
};
maxDiff(9288)