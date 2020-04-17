/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

LeetCode: 1365. How Many Numbers Are Smaller Than the Current Number
*/

var smallerNumbersThanCurrent = function(nums) {
    let sort = [...nums].sort((a,b)=> a - b);
    const map = new Map();
    let min = sort[0];
    let count = 0;
    let countSame = 0
    map.set(min, count)
    for(let i = 1; i < sort.length; i++){
        count++;
        if(min < sort[i]){
            countSame = count;
            min = sort[i];
            map.set(sort[i], count)
        }else{
            map.set(sort[i], countSame)
        } 
        
    }
    return nums.map(num => map.get(num))
};
smallerNumbersThanCurrent([8,1,2,2,3])