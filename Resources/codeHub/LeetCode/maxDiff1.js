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
    let str = num.toString()
    let str1 = str;
    for(let i = 0; i < 9; i++){
        if(str[i] !== "9"){
            str = str.replace(new RegExp(str[i], 'g'), '9');
            break;
        }
    }
    if(str1[0] > "1"){
        str1 = str1.replace(new RegExp(str1[0], 'g'), '1');
        return str - str1;
    }
    for(let i = 0; i < 9; i++){
        if(str1[i] > "1"){
            str1 = str1.replace(new RegExp(str[i], 'g'), '0');
            break;
        }
    }
    return str - str1
};
maxDiff(668)