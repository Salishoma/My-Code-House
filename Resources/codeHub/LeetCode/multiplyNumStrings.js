/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

LeetCode: 43. Multiply Strings
*/

var multiply = function(num1, num2) {
    if(num1 === "0" || num2 === "0") return "0";
    let count = 0;
    let arr = Array(num1.length + num2.length - 1).fill(0);
    for(let i = num1.length - 1; i >= 0; i--){
       for(let j = num2.length - 1; j >= 0; j--){
            arr[i + j] += num1[i] * num2[j] + count;
            count = Math.floor(arr[i + j] / 10);
            arr[i + j] = arr[i + j] % 10;
            if(j === 0 && i !== 0 && count > 0){
                arr[i + j - 1] = count;
                count = 0;
            }
        }
        count > 0 ? arr.unshift(count) : arr;
    }
    return arr.join('')    
};
multiply("99", "88")
multiply("123456789", "987654321")
// multiply("24", "13");