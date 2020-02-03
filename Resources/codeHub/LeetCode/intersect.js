/*
Given two arrays, write a function to compute their intersection.

LeetCode: 350. Intersection of Two Arrays II
*/


var intersect = function(nums1, nums2) {
    var seen = {};
    var arr = [];
    for(var i = 0; i < nums1.length; i++){
        seen[nums1[i]]?seen[nums1[i]] += 1 : seen[nums1[i]] = 1
    }
    for(var i = 0; i < nums2.length; i++){
        if(seen[nums2[i]] > 0){
            arr.push(nums2[i]);
            seen[nums2[i]] -= 1;
        }
    }
    return arr;
};
intersect([1,2,4,5,1],[5,1,3])