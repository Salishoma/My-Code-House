function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let i = 0; i < maxDigitCount; i++){
        let digitBucket = Array.from({length: 10}, () =>[]);
        for(var j = 0; j < nums.length; j++){
            let digit = getDigit(nums[j], i);
            digitBucket[digit].push(nums[j]);
        }
        nums = [].concat(...digitBucket)
    }
    return nums
}
function getDigit(nums, i){
    return Math.floor(Math.abs(nums) / Math.pow(10, i) % 10)
}
function digitCount(nums){
    if(nums === 0) return 1;
    return Math.floor(Math.log10(Math.abs(nums))) + 1;
}
function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

radixSort([23,345,5467,12,2345,9852]);