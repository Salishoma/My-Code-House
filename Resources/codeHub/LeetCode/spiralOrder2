/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

LeetCode: 54. Spiral Matrix
*/

var spiralOrder = function(matrix) {
    let result = [];
    let t = 0; let b = matrix.length - 1; let l = 0; let r = matrix[0].length - 1;
    let dir = 0;
    while(t <= b && l <= r){
        if(dir === 0){
            for(var i = l; i <= r; i++){
                result.push(matrix[t][i]);
            }
            t++;
            dir = 1;
        }
        else if(dir === 1){
            for(var i = t; i <= b; i++){
                result.push(matrix[i][r]);
            }
            r--;
            dir = 2;
        }
        else if(dir === 2){
            for(var i = r; i >= l; i--){
                result.push(matrix[b][i]);
            }
            b--;
            dir = 3;
        }
        else if(dir === 3){
            for(var i = b; i >= t; i--){
                result.push(matrix[i][l]);
            }
            l++;
            dir = 0;
        }
    }

    return result;
};
spiralOrder([
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
])

spiralOrder([
[2,4,6,8],
[5,9,12,16],
[2,11,5,9],
[3,2,1,8]
])

spiralOrder([[1,2,3,4],
[5,6,7,8],
[9,10,11,12]
])
