//counting a number only once

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let count = 0; let i = 0;
    while(i < arr.length - 1) {
        if(arr[i] !== arr[i + 1]) count++;
        i++;
    }
    return count + 1;
}
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 12, 12, 13])
// countUniqueValues([1, 1, 1, 1, 1, 2])
countUniqueValues([])
// countUniqueValues([-2, -1, -1, 0, 1])