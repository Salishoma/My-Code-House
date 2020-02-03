/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

LeetCode: 118. Pascal's Triangle
*/

function generate(numRows) {
    var res = [];
    for(var i=0; i<numRows; i++){
        var val = 1;
        var col = [];
        for(var j=0; j<=i; j++){
            col.push(val);
            val = (val*(i-j))/(j+1);
        }
        res.push(col);
    }
    return res;
}
generate(8)