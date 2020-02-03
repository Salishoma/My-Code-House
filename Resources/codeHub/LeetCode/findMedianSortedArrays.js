/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

LeetCode: 4. Median of Two Sorted Arrays
*/

let findMedianSortedArrays = function(nums1, nums2) {
    let arr = [];    
    let i = 0; let j = 0;
    let mid;
    let avg;
    let midValue;
    let sum = nums1.length + nums2.length;
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            arr.push(nums1[i]);
            i++;
        }else{
            arr.push(nums2[j]);
            j++;
        }
    }
    while(i < nums1.length){
            arr.push(nums1[i]);
            i++;
    }
     while(j < nums2.length){
            arr.push(nums2[j]);
            j++;
    }
    if(sum % 2 === 0){
        mid = sum / 2;
        midValue = (arr[mid - 1] + arr[mid]) / 2
    }else{
        mid = Math.floor(sum / 2);
        midValue = arr[mid];
    }
    return midValue;
};
findMedianSortedArrays([1, 3], [2])