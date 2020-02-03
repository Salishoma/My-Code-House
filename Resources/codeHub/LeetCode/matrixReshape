/*
In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

LeetCode: 566. Reshape the Matrix
*/

var matrixReshape = function(nums, r, c) {
    if(nums.length === 0 || nums[0].length === 0) return nums;
    if(nums.length * nums[0].length !== r * c) return nums;
    nums = [].concat(...nums);
    let arr = [];
    let temp = [];
    let count = 0;
    let j = 0;
    for(let i = 0; i < r * c; i++){
        temp.push(nums[i]);
        count++;
        if(count === c){
            arr.push(temp);
            temp = [];
        }
    }
    return arr;
};
matrixReshape([[1,2],[3,4]],r = 1, c = 4)
// matrixReshape([[1,2],[3,4]], r = 2, c = 4)