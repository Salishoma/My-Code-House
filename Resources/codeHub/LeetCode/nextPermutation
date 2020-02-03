var nextPermutation = function(nums) {
    
    let i = nums.length -2
    // find the pivot that is increasing order
    // if it's not found, i will be -1
    while(nums[i] >= nums[i+1]) {
        i--
    }
    
    // we found pivot
    if(i>=0) {
        let j = nums.length -1
        while(nums[i]  >= nums[j]) {
            j--
        }

        swap(nums,i,j)
    }
    
    // when we haven't found pivot, i+1 is 0. and we reverse entire nums for next permutation
    // when we fuond a pivot, we reverse the rest. 
    // i.e) 1 5 8 4(pivot) 7 6 5(swapped) 3 => 1 5 8 5 (from here reversed) 1 3 4 6 7
    reverse(nums,i+1)
    
    function swap(nums, i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    function reverse(nums, i) {
        let j = nums.length -1
        while(i < j) {
            swap(nums,i,j)
            i++ 
            j--
        }
    }
    return nums
};