/*
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.

LeetCode: 496. Next Greater Element I
*/

var nextGreaterElement = function(nums1, nums2) {
    let map = new Map();
    let arr = []
    for(let i = 0; i < nums2.length; i++){
        map.set(nums2[i], i + 1);
    }
    for(let i = 0; i < nums1.length; i++){
        let j = -1;
        let k = map.get(nums1[i])
        while(k < nums2.length){
            if(nums1[i] < nums2[k]){
                j = nums2[k];
                break;
            }
            k++;
        }
        arr.push(j);
    }
    return arr;
};
nextGreaterElement([4,1,2], [1,3,4,2])