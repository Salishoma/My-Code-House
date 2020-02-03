/*
Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

LeetCode: 832. Flipping an Image
*/

var flipAndInvertImage = function(A) {
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[0].length; j++){
            A[i][j] === 0? A[i][j] = 1 : A[i][j] = 0;
        }
        A[i].reverse()
    }
    return A;
};
flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])