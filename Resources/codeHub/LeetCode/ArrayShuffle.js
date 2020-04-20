/*
Shuffle a set of numbers without duplicates.

LeetCode: 384. Shuffle an Array
*/

var Solution = function(nums) {
    this.nums = nums;
    this.arr = [...nums]
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.arr
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */

Solution.prototype.shuffle = function() {
    let n = this.nums.length;
    for(let i = 0; i < n; i++){
        let index = Math.floor(Math.random() * (n - i));
        [this.nums[i], this.nums[index]] = [this.nums[index], this.nums[i]]
    }
    return this.nums
};
const solution = new Solution([1,2,3])
solution.shuffle()
solution.reset()
solution.shuffle()