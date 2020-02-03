/*
Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

LeetCode: 1341. The K Weakest Rows in a Matrix
*/

var kWeakestRows = function(mat, k) {
    let res = [];
    for(let i = 0; i < mat.length; i++){
        let count = 0;
        for(let j = 0; j < mat[0].length; j++){
            if(mat[i][j] === 1) count++
        }
        if(res[count] === undefined) res[count] = []
        res[count].push(i);
    } 
    for(let i = 0; i < res.length; i++){
        if(res[i] !== undefined) res[i].sort((a, b) => a - b)
    }
    res = [].concat(...res).filter(a => a !== undefined)
    res.length = k;
    return res;
};
kWeakestRows([[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 3)