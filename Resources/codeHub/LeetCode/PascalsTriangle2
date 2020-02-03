/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

LeetCode: 118. Pascal's Triangle
*/

var generate = function(numRows) {
    const output = []
    
    for (let i = 0; i < numRows; i++) {
        output[i] = new Array(i + 1).fill(1)

        for (let j = 1; j <= i / 2; j++)
            output[i][j] = output[i][i - j] = output[i - 1][j - 1] + output[i - 1][j]
    }    
    return output
};
generate(7)
