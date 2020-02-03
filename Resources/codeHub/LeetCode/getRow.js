function getRow(rowIndex) {
    let res = [];
    for(let i=0; i<rowIndex + 1; i++){
        let val = 1;
        let col = [];
        for(let j=0; j<=i; j++){
            col.push(val);
            val = (val*(i-j))/(j+1);
        }
        res = col;
    }
    return res;
}
getRow(6)