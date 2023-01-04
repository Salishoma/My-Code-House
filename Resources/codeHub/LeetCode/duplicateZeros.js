/*
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

LeetCode: 1089. Duplicate Zeros
*/

var duplicateZeros = function(arr) {
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            res.push(0, 0);
        }else res.push(arr[i])
    }
    for(let i = 0; i < arr.length; i++) arr[i] = res[i];
};
duplicateZeros([1,0,2,3,0,4,5,0])