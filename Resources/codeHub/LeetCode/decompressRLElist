/*
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [a, b] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are a elements with value b in the decompressed list.

Return the decompressed list.

LeetCode: 1313. Decompress Run-Length Encoded List
*/

var decompressRLElist = function(nums) {
    let arr = [];
    for(let i = 1; i < nums.length; i += 2){
        let n = nums[i - 1];
        while(n > 0){
            arr.push(nums[i]);
            n--;
        }
    }
    return arr;
};
decompressRLElist([1,2,3,4])