//arranging numbers in increasing order of magnitude

function insertionSort(arr){
    const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(let j = 0; j < i ; j++){
            if(currentVal < arr[j])  swap(arr, i, j);            
            currentVal = arr[i];
        }
    }
    return arr;
}
insertionSort( [15,37,11,19,14] )