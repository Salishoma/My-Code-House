/*
Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

LeetCode: 1341. The K Weakest Rows in a Matrix
*/

var kWeakestRows = function(mat, k) {
    const rowCntArry = [];
    const m = mat.length;
    const n = mat[0].length;
    for (let i = 0; i < m; i++) {
        const row = [i, 0];
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) row[1]++;
        }
        rowCntArry.push(row);
    }
    rowCntArry.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    const res = [];
    for (let i = 0; i < k; i++) {
        res.push(rowCntArry[i][0]);
    }
    return res;
};
kWeakestRows([[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
2)