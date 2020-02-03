/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

LeetCode: 414. Third Maximum Number
*/

var thirdMax = function(nums) {
    let set = new Set(nums);
    let max = -Infinity;
    let min = Infinity;
    let count = 0;
    if(set.size === 1) return nums[0];
    if(set.size <= 3){
        for(let i = 0; i < nums.length; i++){
            if(set.size === 2){
                max = Math.max(max, nums[i]);
            }else if(set.size === 3){
                min = Math.min(min, nums[i]);
            }
        }
        return set.size === 2 ? max : min;
    }else{
        max = -Infinity;
        let k;
        for(let i = 0; i < nums.length; i++){
            if(max < nums[i]){
                max = nums[i];
                k = i
            }
        }
        let l = nums[k];
        max = -Infinity;
        for(let i = 0; i < nums.length; i++){
            if(l === nums[i]) nums[i] = -Infinity;
            if(max < nums[i]){
                max = nums[i];
                k = i
            }
        }
        l = nums[k];
        max = -Infinity;
        for(let i = 0; i < nums.length; i++){
            if(l === nums[i]) nums[i] = -Infinity
            if(max < nums[i]){
                max = nums[i];
                k = i
            }
        }
    }
    return nums[k];   
};
thirdMax([1,2,2,5,3,5])