/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

LeetCode: 1122. Relative Sort Array
*/

var relativeSortArray = function(arr1, arr2) {
   let seen = {};
    let arr = [], arr3 = [];
    let j = 0;
    for(let i = 0; i < arr1.length; i++){
        seen[arr1[i]] = (seen[arr1[i]] || 0) + 1;
    }
    for(let i = 0; i < arr2.length; i++){
        arr[j] = arr2[i]
        j += seen[arr2[i]];
        
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === undefined) arr[i] = arr[i - 1];
    }
    let set = new Set(arr2);
    for(let i = 0; i < arr1.length; i++){
        if(!set.has(arr1[i])) arr3.push(arr1[i]);
    }
    arr3.sort((a, b) => a - b)
    return arr.concat(arr3);
};
relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])