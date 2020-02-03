/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

LeetCode: 15. 3Sum
*/

const threeSum = function(nums){
    nums.sort((a, b) => a - b);
    let j; let k; let m;
    let arr = [];
    for(let i = 0; i < nums.length && nums[i] <= 0; i++){
        if(nums[i] === nums[i - 1]){
             continue;
        } 
        j = i + 1; k = nums.length - 1;
        while(j < k){ 
            let sum = nums[i] + nums[j] + nums[k];
            if(sum < 0) j++;
            else if(sum > 0) k--;
            else{
                m = arr[arr.length - 1];
                if(m !== undefined){
                    if(j < k &&  !(nums[j] === m[1] && nums[k] === m[2])){
                        arr.push([nums[i], nums[j], nums[k]]);
                    }
                }else if(j < k){
                    arr.push([nums[i], nums[j], nums[k]]);
                }
                j++; k--;
            }
        }
    }
       return arr;
}
// threeSum([0,0,0,0,0,0,0])
// threeSum([-2,0,1,1,2])
// threeSum([-2,-2,-1,-1,0,2,-4])
// threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6])
// threeSum([-2,-3,0,0,-2])
// threeSum([-4,-1,-4,0,2,-2,-4,-3,2,-3,2,3,3,-4])
threeSum([-2,0,3,-1,4,0,3,4,1,1,1,-3,-5,4,0])
