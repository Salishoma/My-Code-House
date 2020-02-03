function sumZero(arr){
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        if(arr[i] + arr[j] > 0) j--;
        if(arr[i] + arr[j] < 0)i++;
        if(arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
}
sumZero([-4,-3,-2,-1,0,1,2,3,10])