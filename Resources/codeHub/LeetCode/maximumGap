/*
Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Return 0 if the array contains less than 2 elements.

LeetCode: 164. Maximum Gap
*/

var maximumGap = function(nums) {
    let k = maxDigit(nums);
    for(let i = 0; i < k; i++){
        let arr = Array.from({length: 10}, () => []);
        for(let j = 0; j < nums.length; j++){
            let digit = getDigit(nums[j], i);
            arr[digit].push(nums[j]);
        }
        nums = [].concat(...arr)
    }
    let range = 0;
    for(let j = 1; j < nums.length; j++){
        range = Math.max(range, nums[j] - nums[j - 1]);
    }    
    return range;
}
function getDigit(nums, i){
    return Math.floor(nums / Math.pow(10, i) % 10);
}
function digitCount(nums){
    if(nums === 0) return 1;
    return Math.floor(Math.log10(nums)) + 1;
}
function maxDigit(nums){
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        max = Math.max(max, digitCount(nums[i]));
    }
    return max;
}
maximumGap([3,6,9,1])
maximumGap([2,99999999])