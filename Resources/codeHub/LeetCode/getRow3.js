varvar getRow = function(rowIndex) {
    const arr = Array(rowIndex + 1).fill(1)
    let copy, useCopy
    
    for (let i = 2; i <= rowIndex; i++) {
        copy = 1
        for (let j = 1; j < i; j++) {
            useCopy = copy
            copy = arr[j]
            arr[j] = arr[j] + useCopy
        }
    }  
    return arr
};
getRow(7)