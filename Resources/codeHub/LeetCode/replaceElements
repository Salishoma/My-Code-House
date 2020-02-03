/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

LeetCode: 1299. Replace Elements with Greatest Element on Right Side
*/

var replaceElements = function(arr) {
    let n = arr.length;
    for(let i = n - 1; i > 0; i--){
        if(arr[i] > arr[i - 1]){
            arr[i - 1] = arr[i];
        }
    }
    arr.shift();
    arr.push(-1);
    return arr;
};
replaceElements([1,5,8,9,3,2,4])