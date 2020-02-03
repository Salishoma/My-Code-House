/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

LeetCode: 15. 3Sum
*/

const threeSum = function(nums){
    nums.sort((a, b) => a - b);
    let i = 0; let j = i + 1; let k = nums.length - 1; 
    let arr = [];
    let seen = {};
    if(nums[i] === 0 && nums[j] === 0 && nums[k] === 0 && j !== k){
        arr.push([nums[i], nums[j], nums[k]]);
        return arr;
    }
    while(i < k - 1 && nums[i] <= 0){
        if(j >= k){
            i++; j = i + 1; k = nums.length - 1;
        }
        var sum = nums[i] + nums[j] + nums[k];
        if(sum < 0) j++;
        else if(sum > 0) k--;
        else{
            let str = "" + nums[i] + nums[j] + nums[k];
            // let str = [nums[i], nums[j], nums[k]].join("");
            if(!seen[str]){
                if(i < j && j < k){
                    arr.push([nums[i], nums[j], nums[k]]);
                    seen[str] = 1; 
                }
            }
            j++; k--;
        }
    }
//     return nums;
       return arr;
}

// threeSum([0,0,0,0,0,0,0])
// threeSum([-2,0,1,1,2])
// threeSum([-2,-2,-1,-1,0,2,-4])
// threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6])
threeSum([-2,-3,0,0,-2])