function minSubArrayLen(arr, num){
    let sumArr = 0;
    let numArr = [];
    for(let i = 0; i < arr.length; i++){
        sumArr += arr[i];
        if(sumArr < num){
            numArr.push(arr[i]);
        }else{
            break;
        }
    }
    return numArr;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7);