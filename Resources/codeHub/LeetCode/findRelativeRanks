/*
Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

LeetCode: 506. Relative Ranks
*/

var findRelativeRanks = function(nums) {
    let arr = [...nums]
    arr.sort((a, b) => b - a);
    let seen = {};
    seen[arr[0]] = "Gold Medal";
    seen[arr[1]] = "Silver Medal";
    seen[arr[2]] = "Bronze Medal";
    for(let i = 3; i < arr.length; i++){
        seen[arr[i]] = i + 1 + "";
    }
    for(let i = 0; i < arr.length; i++){
        arr[i] = seen[nums[i]]
    } 
    return arr;
};
findRelativeRanks([5, 4, 3, 2, 1])