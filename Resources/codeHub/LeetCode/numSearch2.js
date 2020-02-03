function search(arr, num){
    let min = 0;
    let max = arr.length - 1;
    if(arr[min] > num || arr[max] < num) return -1;
    while(min <= max){
        let mid = Math.floor((min + max) / 2);
        if(arr[mid] < num){
            min = mid + 1;
            mid = min
        }
        if(arr[mid] > num){
            max = mid - 1;
            mid = max
        }
        if(arr[mid] === num) return mid;
    }
    return -1;
}
search([1,2,3,5,6],-2)