//checking if average of two values in a sorted array gives exact value in the 2nd argument 

function averagePair(arr, avg){
    let x = 0;
    let y = arr.length - 1;
    while(x < arr.length){
        let sum = arr[x] + arr[y];
        if(sum/2 < avg){
            x++;
        }else if(sum/2 > avg){
            y--;
        }else{
            return true;
        }
    }
    return false;
}
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
// averagePair([1, 2, 3], 2.5);
averagePair([-1, 0, 3, 4, 5, 6], 4.1);