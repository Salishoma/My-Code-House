/*
Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.

LeetCode: 532. K-diff Pairs in an Array
*/

var findPairs = function(nums, k) {
    const seen = {};
    let count = 0;
    if(k < 0) return 0;
    if(k === 0){
        for(let num of nums){
            if(seen[num] < 2){
                count += 1;
            }   
                seen[num] = (seen[num] || 0) + 1;
        }
        return count;
    }
    for(let num of nums){
        seen[num] = Infinity
    }
    for(let num of nums){
        if(seen[num - k] && seen[num] !== num - k){
            seen[num] = num - k;
            count++;
        }
    }   
    return count
};
findPairs([3, 1, 4, 1, 5], 2)