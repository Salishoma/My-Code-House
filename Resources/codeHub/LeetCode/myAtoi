/*
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

LeetCode: 8. String to Integer (atoi)
*/

var myAtoi = function(str) {
    let str1 = str.trim();
    let arr = [];
    if(!/[0-9]/.test(str1[0]) && str1[0] !== "+" && str1[0] !== "-") return 0;
    if((str1[0] === "+" || str1[0] === "-") && str1[1] != parseInt(str1[1])) return 0;
    if(str1[0] === "+" || str1[0] === "-") arr.push(str1[0]);
    if(str1[0] === "+" || str1[0] === "-"){
        for(let i = 1; i < str1.length; i++){
            if(str1[i] == parseInt(str1[i])) arr.push(str1[i]);            
            else break;
        }
    }else{
        for(let i = 0; i < str1.length; i++){
            if(str1[i] == parseInt(str1[i])) arr.push(str1[i]);            
            else break;
        }
    }

    
    if(str1.length === 1 && (str1[0] === "+" || str1[0] === "-")) return 0;
    let num = parseInt(arr.join(""));
    if(num > Math.pow(2, 31) - 1) num = Math.pow(2, 31) - 1;          
    if(num < Math.pow(-2, 31)) num = Math.pow(-2, 31);           
    return num;   
};

// myAtoi(" -2147483650")
myAtoi("   +0 123")
// myAtoi(" -4")
// myAtoi("  -0012a42")