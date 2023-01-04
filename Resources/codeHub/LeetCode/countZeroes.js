// sorted array with 1s first, then zeroes

function countZeroes(arr){
    let i = 0;
    let j = arr.length - 1;
    let count = 0;
    let mid;
    while(i <= j){
        mid = Math.floor((i + j)/2);
        if(arr[mid] === 0){
            count += j + 1 - mid;
            j = mid - 1;
        }else i = mid + 1;
    }
    return count;
}
countZeroes([1,1,1,0,0,0,0,0,0])