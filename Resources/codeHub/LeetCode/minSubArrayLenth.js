function minSubArrayLen(arr, n){
    let i = 0; let j = 0; let min = arr.length; let sum = 0; let total = 0
    while(i < arr.length){
        sum += arr[i]; total += arr[i];
        if(sum >= n){
            min = Math.min(min, i - j + 1);
            sum = 0;
            j++; 
            i = j
        }else{
            i++;
        }            
    }
    return total < n ? 0 : min;
}
minSubArrayLen([2, 3, 1, 2, 4, 3], 7)
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)