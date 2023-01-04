/*
You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.

Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.

Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.

LeetCode: 646. Maximum Length of Pair Chain
*/
var findLongestChain = function(pairs) {
    const numSort = (nums1, nums2) =>{
        return nums1[1] -nums2[1];
    }
    pairs.sort(numSort);
    let count = 0, min = -Infinity;
    
    for(let i = 0; i < pairs.length; i++){
        if(pairs[i][0] > min){
            min = pairs[i][1]
            count++;
        }
    }
    return count;
};
findLongestChain([[1,2], [2,3], [3,4]])