var imageSmoother = function(M) {
    const arr = []
    for(let i = 0; i < M.length; i++){
        arr[i] = [];
        for(let j = 0; j < M[0].length; j++){
            let count = 0;
            arr[i][j] = 0;
            for(let k = i - 1; k <= i + 1; k++){
                if(!M[k]) continue;
                for(let l = j - 1; l <= j + 1; l++){
                    if(M[k][l] === undefined) continue;
                    arr[i][j] += M[k][l];
                    count++;
                }
            }
            arr[i][j] = Math.floor(arr[i][j] / count)
        }
    }
    return arr;
};
imageSmoother([[1,1,1],[1,0,1],[1,1,1]])