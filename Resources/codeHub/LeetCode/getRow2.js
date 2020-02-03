function getRow(rowIndex) {
    if(rowIndex === 0) return [1]; 
    if(rowIndex === 1) return [1, 1]; 
    let res = Array(rowIndex + 1).fill(1)
    let temp = res[0];
    for(let i = 1, j = rowIndex-1 ; i<= j; ++i,--j){
        res[i] = res[j] = temp * (rowIndex - i + 1) / i;
        temp = res[i]; 
    }
    return res;
}
getRow(4)